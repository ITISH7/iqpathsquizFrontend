import React from 'react';
import styles from './QuizImage.module.css'; // Import CSS module

const QuizImage = ({ image }) => (
  <img className={styles.imageStyle} src={image} alt="picture quiz" />
);

export default QuizImage;

