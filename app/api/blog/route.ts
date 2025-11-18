import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET - List all blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const featured = searchParams.get('featured');
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = `
      SELECT 
        bp.*,
        u.full_name as author_name
      FROM blog_posts bp
      LEFT JOIN users u ON bp.author_id = u.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      query += ` AND bp.status = $${paramCount}`;
      params.push(status);
    }

    if (featured !== null) {
      paramCount++;
      query += ` AND bp.is_featured = $${paramCount}`;
      params.push(featured === 'true');
    }

    if (category) {
      paramCount++;
      query += ` AND bp.category = $${paramCount}`;
      params.push(category);
    }

    query += ` ORDER BY bp.published_at DESC NULLS LAST, bp.created_at DESC`;
    
    paramCount++;
    query += ` LIMIT $${paramCount}`;
    params.push(limit);
    
    paramCount++;
    query += ` OFFSET $${paramCount}`;
    params.push(offset);

    const result = await pool.query(query, params);

    // Get total count
    let countQuery = 'SELECT COUNT(*) FROM blog_posts WHERE 1=1';
    const countParams: any[] = [];
    let countParamCount = 0;

    if (status) {
      countParamCount++;
      countQuery += ` AND status = $${countParamCount}`;
      countParams.push(status);
    }

    if (featured !== null) {
      countParamCount++;
      countQuery += ` AND is_featured = $${countParamCount}`;
      countParams.push(featured === 'true');
    }

    if (category) {
      countParamCount++;
      countQuery += ` AND category = $${countParamCount}`;
      countParams.push(category);
    }

    const countResult = await pool.query(countQuery, countParams);
    const total = parseInt(countResult.rows[0].count);

    return NextResponse.json({
      posts: result.rows,
      total,
      limit,
      offset,
    });
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      featured_image,
      category,
      tags = [],
      status = 'draft',
      is_featured = false,
      read_time_minutes,
      meta_title,
      meta_description,
    } = body;

    // Validation
    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const slugCheck = await pool.query(
      'SELECT id FROM blog_posts WHERE slug = $1',
      [slug]
    );

    if (slugCheck.rows.length > 0) {
      return NextResponse.json(
        { error: 'Slug already exists' },
        { status: 400 }
      );
    }

    const published_at = status === 'published' ? new Date().toISOString() : null;

    const result = await pool.query(
      `INSERT INTO blog_posts (
        title, slug, excerpt, content, featured_image, category, tags,
        author_id, status, is_featured, read_time_minutes,
        published_at, meta_title, meta_description
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *`,
      [
        title, slug, excerpt, content, featured_image, category,
        JSON.stringify(tags), userId, status, is_featured,
        read_time_minutes, published_at, meta_title, meta_description
      ]
    );

    return NextResponse.json({
      success: true,
      post: result.rows[0],
    });
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post', details: error.message },
      { status: 500 }
    );
  }
}
