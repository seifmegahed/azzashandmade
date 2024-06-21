// React
import { createContext, useContext } from "react";

// Firebase
import { Auth, User, UserCredential } from "firebase/auth";

// Types
export type AuthContextModel = {
  auth: Auth;
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

export const useAuth = (): AuthContextModel => useContext(AuthContext);
