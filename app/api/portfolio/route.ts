import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET - List all portfolio items
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const featured = searchParams.get('featured');
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = `
      SELECT 
        p.*,
        u.full_name as created_by_name
      FROM portfolio p
      LEFT JOIN users u ON p.created_by = u.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 0;

    if (published !== null) {
      paramCount++;
      query += ` AND p.is_published = $${paramCount}`;
      params.push(published === 'true');
    }

    if (featured !== null) {
      paramCount++;
      query += ` AND p.is_featured = $${paramCount}`;
      params.push(featured === 'true');
    }

    if (category) {
      paramCount++;
      query += ` AND p.category = $${paramCount}`;
      params.push(category);
    }

    query += ` ORDER BY p.display_order ASC, p.created_at DESC`;
    
    paramCount++;
    query += ` LIMIT $${paramCount}`;
    params.push(limit);
    
    paramCount++;
    query += ` OFFSET $${paramCount}`;
    params.push(offset);

    const result = await pool.query(query, params);

    // Get total count
    let countQuery = 'SELECT COUNT(*) FROM portfolio WHERE 1=1';
    const countParams: any[] = [];
    let countParamCount = 0;

    if (published !== null) {
      countParamCount++;
      countQuery += ` AND is_published = $${countParamCount}`;
      countParams.push(published === 'true');
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
      portfolio: result.rows,
      total,
      limit,
      offset,
    });
  } catch (error: any) {
    console.error('Error fetching portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Create new portfolio item
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
      description,
      client_name,
      category,
      featured_image,
      gallery_images = [],
      project_url,
      technologies = [],
      completion_date,
      is_featured = false,
      is_published = true,
      display_order = 0,
      meta_title,
      meta_description,
    } = body;

    // Validation
    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const slugCheck = await pool.query(
      'SELECT id FROM portfolio WHERE slug = $1',
      [slug]
    );

    if (slugCheck.rows.length > 0) {
      return NextResponse.json(
        { error: 'Slug already exists' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `INSERT INTO portfolio (
        title, slug, description, client_name, category,
        featured_image, gallery_images, project_url, technologies,
        completion_date, is_featured, is_published, display_order,
        meta_title, meta_description, created_by
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING *`,
      [
        title, slug, description, client_name, category,
        featured_image, JSON.stringify(gallery_images), project_url,
        JSON.stringify(technologies), completion_date, is_featured,
        is_published, display_order, meta_title, meta_description, userId
      ]
    );

    return NextResponse.json({
      success: true,
      portfolio: result.rows[0],
    });
  } catch (error: any) {
    console.error('Error creating portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to create portfolio', details: error.message },
      { status: 500 }
    );
  }
}
