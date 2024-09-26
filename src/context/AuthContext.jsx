import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState(80);
  const [userId, setUserId] = useState('66f103e52851cc36ff0f7f5d');


  const ToggleLogin = (isLoggedIn) => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn,setIsLoggedIn, ToggleLogin, progress, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}
