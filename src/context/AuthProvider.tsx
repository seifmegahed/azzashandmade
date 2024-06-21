// React
import { useEffect, useMemo, useState } from "react";

// Firebase
import {
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { AuthContext, AuthContextModel } from "./authContext";
import Loading from "../components/Loading";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = async (): Promise<void> => signOut(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuthData) => {
      setUser(userAuthData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value: AuthContextModel = useMemo(
    () => ({
      auth,
      user,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
