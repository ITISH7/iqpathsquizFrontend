import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState(60);


  const ToggleLogin = (isLoggedIn) => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, ToggleLogin, progress }}>
      {children}
    </AuthContext.Provider>
  );
}
