import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../config/firebase';

export interface SocialAuthResponse {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    photoURL: string | null;
  };
  token: string;
}

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const formatAuthResponse = async (
  response: UserCredential
): Promise<SocialAuthResponse> => {
  const token = await response.user.getIdToken();
  return {
    user: {
      id: response.user.uid,
      name: response.user.displayName,
      email: response.user.email,
      photoURL: response.user.photoURL,
    },
    token,
  };
};

export const authService = {
  async signInWithGoogle(): Promise<SocialAuthResponse> {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      return formatAuthResponse(response);
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        throw new Error('Por favor, permita popups para fazer login com Google');
      }
      throw new Error('Erro ao fazer login com Google');
    }
  },

  async signInWithFacebook(): Promise<SocialAuthResponse> {
    try {
      const response = await signInWithPopup(auth, facebookProvider);
      return formatAuthResponse(response);
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        throw new Error('Por favor, permita popups para fazer login com Facebook');
      }
      throw new Error('Erro ao fazer login com Facebook');
    }
  },

  async signOut(): Promise<void> {
    await auth.signOut();
  },
};
