import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/auth';
import { toast } from 'react-toastify';

interface User {
  id: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (credentials: { email: string; password: string }) => {
    try {
      // Implementar login com email/senha
      toast.error('Login com email/senha ainda não implementado');
    } catch (error) {
      toast.error('Erro ao fazer login');
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const response = await authService.signInWithGoogle();
      setUser(response.user);
      localStorage.setItem('@Repasse2:token', response.token);
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error((error as Error).message);
      throw error;
    }
  };

  const signInWithFacebook = async () => {
    try {
      const response = await authService.signInWithFacebook();
      setUser(response.user);
      localStorage.setItem('@Repasse2:token', response.token);
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error((error as Error).message);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authService.signOut();
      setUser(null);
      localStorage.removeItem('@Repasse2:token');
      toast.success('Logout realizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao fazer logout');
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        signIn,
        signInWithGoogle,
        signInWithFacebook,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
