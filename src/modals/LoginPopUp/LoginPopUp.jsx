import React, { useState, useEffect } from 'react';
import styles from './LoginPopUp.module.css'; 

const LoginPopup = ({ message, show, duration }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer); // Clear timer if component unmounts
    }
  }, [show, duration]);

  return (
    <>
      {visible && (
        <div className={styles.popup}>
          <p>
            <a href="/login" className={styles.loginLink}> 
              {message}
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
