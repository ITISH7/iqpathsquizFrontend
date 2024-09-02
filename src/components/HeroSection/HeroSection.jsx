import React, { useContext, useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import { AuthContext } from '../../context/AuthContext';
import utilityStyle from '../../utils/utils.module.css';


function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      setAnimate(true);
     }
    else{
        setAnimate(false);
    }
  }, [isLoggedIn]);

  return (
    <div className={`${styles.box}`}>
      <img
        src="src\assets\plane.svg" 
        alt="Paper Plane"
        className={`${styles.paperPlane} ${animate ? styles.animate : ''}`}
      />
    </div>
  );
}

export default HeroSection;
