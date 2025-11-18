// API Client Helper for PostgreSQL API calls
// Simplifies API calls with automatic authentication

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
};

class APIClient {
  private getUserId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('tkv_user_id');
  }

  private async request(endpoint: string, options: RequestOptions = {}) {
    const userId = this.getUserId();
    
    // Authentication disabled - allow requests without user ID
    // Uncomment below to re-enable authentication check:
    // if (!userId && typeof window !== 'undefined') {
    //   window.location.href = '/login';
    //   throw new Error('Not authenticated');
    // }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Send user ID if available, but don't require it
    if (userId) {
      headers['x-user-id'] = userId;
    } else {
      // Use a default/guest user ID for development
      headers['x-user-id'] = 'dev-user';
    }

    const config: RequestInit = {
      method: options.method || 'GET',
      headers,
    };

    if (options.body) {
      config.body = JSON.stringify(options.body);
    }

    const response = await fetch(endpoint, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  // Generic CRUD methods
  async get(endpoint: string) {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint: string, data: any) {
    return this.request(endpoint, { method: 'POST', body: data });
  }

  async put(endpoint: string, data: any) {
    return this.request(endpoint, { method: 'PUT', body: data });
  }

  async delete(endpoint: string, id?: string) {
    const url = id ? `${endpoint}?id=${id}` : endpoint;
    return this.request(url, { method: 'DELETE' });
  }

  // Resource-specific methods
  dashboard = {
    getStats: () => this.get('/api/dashboard/stats'),
    getActivities: () => this.get('/api/dashboard/activities'),
  };

  clients = {
    list: () => this.get('/api/clients'),
    create: (data: any) => this.post('/api/clients', data),
    update: (data: any) => this.put('/api/clients', data),
    delete: (id: string) => this.delete('/api/clients', id),
  };

  invoices = {
    list: () => this.get('/api/invoices'),
    create: (data: any) => this.post('/api/invoices', data),
    update: (id: string, data: any) => this.put('/api/invoices', { ...data, id }),
    delete: (id: string) => this.delete('/api/invoices', id),
  };

  quotations = {
    list: () => this.get('/api/quotations'),
    create: (data: any) => this.post('/api/quotations', data),
    update: (data: any) => this.put('/api/quotations', data),
    delete: (id: string) => this.delete('/api/quotations', id),
  };

  expenses = {
    list: () => this.get('/api/expenses'),
    create: (data: any) => this.post('/api/expenses', data),
    update: (id: string, data: any) => this.put('/api/expenses', { ...data, id }),
    delete: (id: string) => this.delete('/api/expenses', id),
  };

  payments = {
    list: () => this.get('/api/payments'),
    create: (data: any) => this.post('/api/payments', data),
  };

  leads = {
    list: () => this.get('/api/leads'),
    update: (data: any) => this.put('/api/leads', data),
    delete: (id: string) => this.delete('/api/leads', id),
  };
}

export const api = new APIClient();
