import { createContext, useContext, useMemo, useState } from "react";
const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null)

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
    // navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    // navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  )
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};