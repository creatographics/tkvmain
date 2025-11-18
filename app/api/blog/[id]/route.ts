import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET - Get single blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await pool.query(
      `SELECT 
        bp.*,
        u.full_name as author_name
      FROM blog_posts bp
      LEFT JOIN users u ON bp.author_id = u.id
      WHERE bp.id = $1`,
      [params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Increment view count
    await pool.query(
      'UPDATE blog_posts SET view_count = view_count + 1 WHERE id = $1',
      [params.id]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post', details: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
      tags,
      status,
      is_featured,
      read_time_minutes,
      meta_title,
      meta_description,
    } = body;

    // Check if slug is taken by another post
    if (slug) {
      const slugCheck = await pool.query(
        'SELECT id FROM blog_posts WHERE slug = $1 AND id != $2',
        [slug, params.id]
      );

      if (slugCheck.rows.length > 0) {
        return NextResponse.json(
          { error: 'Slug already exists' },
          { status: 400 }
        );
      }
    }

    // If changing to published, set published_at
    let published_at = undefined;
    if (status === 'published') {
      const currentPost = await pool.query(
        'SELECT status, published_at FROM blog_posts WHERE id = $1',
        [params.id]
      );
      if (currentPost.rows[0].status !== 'published' && !currentPost.rows[0].published_at) {
        published_at = new Date().toISOString();
      }
    }

    const result = await pool.query(
      `UPDATE blog_posts SET
        title = COALESCE($1, title),
        slug = COALESCE($2, slug),
        excerpt = COALESCE($3, excerpt),
        content = COALESCE($4, content),
        featured_image = COALESCE($5, featured_image),
        category = COALESCE($6, category),
        tags = COALESCE($7, tags),
        status = COALESCE($8, status),
        is_featured = COALESCE($9, is_featured),
        read_time_minutes = COALESCE($10, read_time_minutes),
        published_at = COALESCE($11, published_at),
        meta_title = COALESCE($12, meta_title),
        meta_description = COALESCE($13, meta_description),
        updated_at = NOW()
      WHERE id = $14
      RETURNING *`,
      [
        title, slug, excerpt, content, featured_image, category,
        tags ? JSON.stringify(tags) : null,
        status, is_featured, read_time_minutes, published_at,
        meta_title, meta_description, params.id
      ]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      post: result.rows[0],
    });
  } catch (error: any) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await pool.query(
      'DELETE FROM blog_posts WHERE id = $1 RETURNING id',
      [params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post', details: error.message },
      { status: 500 }
    );
  }
}

// PATCH - Toggle publish/featured status
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { action } = body; // 'publish', 'draft', 'toggle-featured'

    let query = '';
    if (action === 'publish') {
      query = `UPDATE blog_posts SET 
        status = 'published', 
        published_at = COALESCE(published_at, NOW()), 
        updated_at = NOW() 
        WHERE id = $1 RETURNING *`;
    } else if (action === 'draft') {
      query = 'UPDATE blog_posts SET status = \'draft\', updated_at = NOW() WHERE id = $1 RETURNING *';
    } else if (action === 'toggle-featured') {
      query = 'UPDATE blog_posts SET is_featured = NOT is_featured, updated_at = NOW() WHERE id = $1 RETURNING *';
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const result = await pool.query(query, [params.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      post: result.rows[0],
    });
  } catch (error: any) {
    console.error('Error toggling blog post status:', error);
    return NextResponse.json(
      { error: 'Failed to toggle status', details: error.message },
      { status: 500 }
    );
  }
}
