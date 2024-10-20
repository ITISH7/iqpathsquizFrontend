import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState(80);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('6714cb48840cd50c6f6f4869');
  const [GraphUpdateTrigger, setGraphUpdateTrigger] = useState(false);
  const [progressBarTrigger, setProgressBarTrigger] = useState(false);

  const ToggleLogin = (isLoggedIn) => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Load user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);



  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        ToggleLogin,
        progress,
        userId,
        setUserId,
        GraphUpdateTrigger,
        setGraphUpdateTrigger,
        progressBarTrigger,
        setProgressBarTrigger,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
