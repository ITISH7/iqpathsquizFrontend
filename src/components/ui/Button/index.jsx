import React from 'react';
import styles from './Button.module.css';

const Button = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  bold,
  big,
  disabled,
}) => {
  return (
    <button
      className={`${styles.buttonStyle} 
                  ${outline ? styles.outline : ''} 
                  ${bold ? styles.bold : ''} 
                  ${big ? styles.big : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <span className={styles.iconLeft}>{icon}</span>}
      {text}
      {icon && iconPosition === 'right' && <span className={styles.iconRight}>{icon}</span>}
    </button>
  );
};

export default Button;
