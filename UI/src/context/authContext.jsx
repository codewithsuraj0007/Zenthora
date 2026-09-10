import { createContext, useState, useEffect } from "react";
import api from "../apis/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrUser = async () => {
    try {

      const userData = await api.get("/auth/me");

      console.log("AUTH ME:", userData.data);

      setUser(userData.data.data);

    } catch (err) {

      console.log("AUTH ME ERROR:", err);
      setUser(null);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    getCurrUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading ,getCurrUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;