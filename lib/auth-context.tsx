'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Define User and Session types locally (no longer using Supabase)
type User = {
  id: string;
  email: string;
  user_metadata: {
    full_name: string;
    phone?: string;
    address?: string;
    bio?: string;
    company?: string;
    position?: string;
  };
  app_metadata: Record<string, any>;
  aud: string;
  created_at: string;
  role: string;
};

type Session = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: User;
};

type UserProfile = {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'staff';
  avatar_url: string | null;
};

type AuthContextType = {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a short timeout to prevent loading screen
    const loadingTimeout = setTimeout(() => {
      console.warn('Auth loading timeout - setting loading to false');
      setLoading(false);
    }, 500);

    console.log('🔧 Using local PostgreSQL database');
    clearTimeout(loadingTimeout);
    
    // Check for existing session in localStorage
    const sessionToken = localStorage.getItem('tkv_session_token');
    const userId = localStorage.getItem('tkv_user_id');
    
    if (sessionToken && userId) {
      console.log('🔍 Checking existing session...');
      
      // Fetch user data from API
      fetch('/api/auth/me', {
        headers: {
          'x-user-id': userId,
        },
      })
        .then(async (response) => {
          if (response.ok) {
            const { user: localUser } = await response.json();
            console.log('✅ Valid session found');
            
            const mockUser: User = {
              id: localUser.id,
              email: localUser.email,
              user_metadata: { full_name: localUser.full_name },
              app_metadata: {},
              aud: 'authenticated',
              created_at: localUser.created_at,
              role: 'authenticated',
            };
            
            const mockSession: Session = {
              access_token: sessionToken,
              refresh_token: 'local-refresh',
              expires_in: 86400,
              token_type: 'bearer',
              user: mockUser,
            };
            
            setUser(mockUser);
            setSession(mockSession);
            setProfile({
              id: localUser.id,
              email: localUser.email,
              full_name: localUser.full_name,
              role: localUser.role,
              avatar_url: localUser.avatar_url,
            });
          } else {
            console.log('⚠️ Session expired or invalid');
            localStorage.removeItem('tkv_session_token');
            localStorage.removeItem('tkv_user_id');
          }
        })
        .catch((error) => {
          console.error('❌ Error checking session:', error);
          localStorage.removeItem('tkv_session_token');
          localStorage.removeItem('tkv_user_id');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log('🔐 SignIn called with email:', email);
    console.log('🔧 Using local PostgreSQL authentication');
    
    // Call local auth API
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Login failed:', error.error);
      throw new Error(error.error || 'Invalid email or password');
    }

    const { user: localUser, session: localSession } = await response.json();
    console.log('✅ Login successful for:', localUser.email);
    
    // Store session token in localStorage and cookie
    localStorage.setItem('tkv_session_token', localSession.token);
    localStorage.setItem('tkv_user_id', localUser.id);
    
    // Set cookie for middleware
    document.cookie = `tkv-session=${localSession.token}; path=/; max-age=86400; SameSite=Lax`;
    
    // Create user object
    const mockUser: User = {
      id: localUser.id,
      email: localUser.email,
      user_metadata: { full_name: localUser.full_name },
      app_metadata: {},
      aud: 'authenticated',
      created_at: new Date().toISOString(),
      role: 'authenticated',
    };
    
    const mockSession: Session = {
      access_token: localSession.token,
      refresh_token: 'local-refresh',
      expires_in: 86400,
      token_type: 'bearer',
      user: mockUser,
    };
    
    setUser(mockUser);
    setSession(mockSession);
    setProfile({
      id: localUser.id,
      email: localUser.email,
      full_name: localUser.full_name,
      role: localUser.role,
      avatar_url: null,
    });
    
    console.log('✅ User state updated, login complete');
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    console.log('🔧 Using local PostgreSQL signup');
    
    // Call local auth API
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, fullName }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Signup failed');
    }

    const { user: localUser, session: localSession } = await response.json();
    
    // Store session token in localStorage and cookie
    localStorage.setItem('tkv_session_token', localSession.token);
    localStorage.setItem('tkv_user_id', localUser.id);
    
    // Set cookie for middleware
    document.cookie = `tkv-session=${localSession.token}; path=/; max-age=86400; SameSite=Lax`;
    
    // Create user object
    const mockUser: User = {
      id: localUser.id,
      email: localUser.email,
      user_metadata: { full_name: localUser.full_name },
      app_metadata: {},
      aud: 'authenticated',
      created_at: new Date().toISOString(),
      role: 'authenticated',
    };
    
    const mockSession: Session = {
      access_token: localSession.token,
      refresh_token: 'local-refresh',
      expires_in: 86400,
      token_type: 'bearer',
      user: mockUser,
    };
    
    setUser(mockUser);
    setSession(mockSession);
    setProfile({
      id: localUser.id,
      email: localUser.email,
      full_name: localUser.full_name,
      role: localUser.role,
      avatar_url: null,
    });
  };

  const signOut = async () => {
    console.log('🚪 Signing out...');
    
    const userId = localStorage.getItem('tkv_user_id');
    
    if (userId) {
      // Call logout API
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
    }
    
    localStorage.removeItem('tkv_session_token');
    localStorage.removeItem('tkv_user_id');
    
    // Remove cookie
    document.cookie = 'tkv-session=; path=/; max-age=0';
    
    setUser(null);
    setSession(null);
    setProfile(null);
    
    console.log('✅ Signed out successfully');
    window.location.href = '/login';
  };

  const resetPassword = async (email: string) => {
    // Password reset not implemented for local auth yet
    // You can implement this by creating a password reset API endpoint
    console.log('Password reset requested for:', email);
    throw new Error('Password reset not implemented yet. Please contact administrator.');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
        loading,
        signIn,
        signUp,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
