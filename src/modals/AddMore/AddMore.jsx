import React, { useEffect } from 'react';
import styles from './AddMore.module.css';

const AddMore = ({ position, onClose }) => {
  // Automatically close the pop-up after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Call the onClose function after 2 seconds
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!position) {
    return null;
  }

  return (
    <div
      className={styles.popUp}
      style={{
        top: `${position.top - 100}px`, // Adjusted the top distance
        left: `${position.left - 110}px`, // Center it horizontally
      }}
    >
      <p>Enroll in additional subjects and take tests to unlock more cards.</p>
    </div>
  );
};

export default AddMore;
