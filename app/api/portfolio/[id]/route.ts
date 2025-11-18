import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET - Get single portfolio item
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await pool.query(
      `SELECT 
        p.*,
        u.full_name as created_by_name
      FROM portfolio p
      LEFT JOIN users u ON p.created_by = u.id
      WHERE p.id = $1`,
      [params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }

    // Increment view count
    await pool.query(
      'UPDATE portfolio SET view_count = view_count + 1 WHERE id = $1',
      [params.id]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Error fetching portfolio item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio item', details: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update portfolio item
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
      description,
      client_name,
      category,
      featured_image,
      gallery_images,
      project_url,
      technologies,
      completion_date,
      is_featured,
      is_published,
      display_order,
      meta_title,
      meta_description,
    } = body;

    // Check if slug is taken by another item
    if (slug) {
      const slugCheck = await pool.query(
        'SELECT id FROM portfolio WHERE slug = $1 AND id != $2',
        [slug, params.id]
      );

      if (slugCheck.rows.length > 0) {
        return NextResponse.json(
          { error: 'Slug already exists' },
          { status: 400 }
        );
      }
    }

    const result = await pool.query(
      `UPDATE portfolio SET
        title = COALESCE($1, title),
        slug = COALESCE($2, slug),
        description = COALESCE($3, description),
        client_name = COALESCE($4, client_name),
        category = COALESCE($5, category),
        featured_image = COALESCE($6, featured_image),
        gallery_images = COALESCE($7, gallery_images),
        project_url = COALESCE($8, project_url),
        technologies = COALESCE($9, technologies),
        completion_date = COALESCE($10, completion_date),
        is_featured = COALESCE($11, is_featured),
        is_published = COALESCE($12, is_published),
        display_order = COALESCE($13, display_order),
        meta_title = COALESCE($14, meta_title),
        meta_description = COALESCE($15, meta_description),
        updated_at = NOW()
      WHERE id = $16
      RETURNING *`,
      [
        title, slug, description, client_name, category,
        featured_image,
        gallery_images ? JSON.stringify(gallery_images) : null,
        project_url,
        technologies ? JSON.stringify(technologies) : null,
        completion_date, is_featured, is_published, display_order,
        meta_title, meta_description, params.id
      ]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      portfolio: result.rows[0],
    });
  } catch (error: any) {
    console.error('Error updating portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to update portfolio', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete portfolio item
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
      'DELETE FROM portfolio WHERE id = $1 RETURNING id',
      [params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Portfolio item deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to delete portfolio', details: error.message },
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
    const { action } = body; // 'toggle-publish' or 'toggle-featured'

    let query = '';
    if (action === 'toggle-publish') {
      query = 'UPDATE portfolio SET is_published = NOT is_published, updated_at = NOW() WHERE id = $1 RETURNING *';
    } else if (action === 'toggle-featured') {
      query = 'UPDATE portfolio SET is_featured = NOT is_featured, updated_at = NOW() WHERE id = $1 RETURNING *';
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const result = await pool.query(query, [params.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      portfolio: result.rows[0],
    });
  } catch (error: any) {
    console.error('Error toggling portfolio status:', error);
    return NextResponse.json(
      { error: 'Failed to toggle status', details: error.message },
      { status: 500 }
    );
  }
}
