import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState(80);
  const [userId, setUserId] = useState('6706803105c908bd697d49f6');
  const [GraphUpdateTrigger, setGraphUpdateTrigger] = useState(false);
  const [progressBarTrigger, setProgressBarTrigger] = useState(false);

  const ToggleLogin = (isLoggedIn) => {
    setIsLoggedIn(!isLoggedIn);
  };



  return (
    <AuthContext.Provider value={{ isLoggedIn,setIsLoggedIn, ToggleLogin, progress, userId, setUserId, GraphUpdateTrigger, setGraphUpdateTrigger ,progressBarTrigger, setProgressBarTrigger}}>
      {children}
    </AuthContext.Provider>
  );
}
