import { createContext, useState } from "react";
import { USERS } from "../data";

// create context for auth
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    const user = USERS.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUser(user);
      setIsAuthenticated(true);
    }
  };

  const signup = (email, password) => {
    const user = USERS.find((user) => user.email === email);
    if (user) {
      return false;
    }
    USERS.push({ email, password });
    setUser({ email, password });
    setIsAuthenticated(true);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
