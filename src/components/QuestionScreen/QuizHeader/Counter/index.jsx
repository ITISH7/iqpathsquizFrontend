import React from 'react';
import PropTypes from 'prop-types';
import timerIcon from '../../../../assets/icons/timer.svg'; // Import SVG as an image
import { Flex } from '../../../../styles/Global';
import styles from './Counter.module.css';

const Counter = ({ time }) => {
  return (
    <Flex className={styles.center}> {/* Apply 'center' class if needed */}
      <img src={timerIcon} alt="Timer" className={styles.timerIcon} /> {/* Use the SVG as an image */}
      <span className={styles.timerStyle}>{time}</span>
    </Flex>
  );
};

Counter.propTypes = {
  time: PropTypes.string.isRequired, // Ensure time is a string
};

export default Counter;
