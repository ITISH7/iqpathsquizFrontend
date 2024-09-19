import React from 'react';
import styles from './ToggleTheme.module.css'; // Import CSS module


const ToggleTheme = ({ onChange, id, value, checked, currentTheme }) => {
  return (
    <label htmlFor={id} className={styles.toggleLabel}>
      Mode:
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        value={value}
        checked={checked}
        className={styles.toggleInput}
      />
      <span className={styles.ball}>
        {currentTheme === 'light' ? 
        <img src="src\assets\icons\sun.svg" alt="sun Icon" style={{ width: '24px', height: '24px' }} /> 
        :
        <img src="src\assets\icons\moon.svg" alt="moon Icon" style={{ width: '24px', height: '24px' }} />
        }
      </span>
    </label>
  );
};

export default ToggleTheme;

