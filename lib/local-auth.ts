// Simple local authentication for development
// No external services required

export type LocalUser = {
  id: string;
  email: string;
  password: string;
  full_name: string;
  role: 'admin' | 'staff';
  avatar_url: string | null;
};

// Default users for local development
const LOCAL_USERS: LocalUser[] = [
  {
    id: 'admin-1',
    email: 'admin@tkv.com',
    password: 'admin123',
    full_name: 'Admin User',
    role: 'admin',
    avatar_url: null,
  },
  {
    id: 'staff-1',
    email: 'staff@tkv.com',
    password: 'staff123',
    full_name: 'Staff User',
    role: 'staff',
    avatar_url: null,
  },
  {
    id: 'user-3',
    email: 'creatographics@gmail.com',
    password: 'creatographics',
    full_name: 'creatographics',
    role: 'admin',
    avatar_url: null,
  },
];

// Store session in localStorage
const SESSION_KEY = 'tkv_local_session';

export const localAuth = {
  // Sign in with email and password
  signIn: (email: string, password: string): LocalUser | null => {
    const user = LOCAL_USERS.find(
      (u) => u.email === email && u.password === password
    );
    
    if (user) {
      // Store session
      const session = {
        user: {
          id: user.id,
          email: user.email,
          full_name: user.full_name,
          role: user.role,
          avatar_url: user.avatar_url,
        },
        timestamp: Date.now(),
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return user;
    }
    
    return null;
  },

  // Get current session
  getSession: (): LocalUser | null => {
    if (typeof window === 'undefined') return null;
    
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (!sessionData) return null;
    
    try {
      const session = JSON.parse(sessionData);
      // Check if session is less than 24 hours old
      const isValid = Date.now() - session.timestamp < 24 * 60 * 60 * 1000;
      
      if (isValid) {
        return session.user;
      } else {
        localStorage.removeItem(SESSION_KEY);
        return null;
      }
    } catch {
      return null;
    }
  },

  // Sign out
  signOut: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SESSION_KEY);
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return localAuth.getSession() !== null;
  },
};
