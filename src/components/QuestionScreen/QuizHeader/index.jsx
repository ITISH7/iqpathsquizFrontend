import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../../../styles/Global'; // Ensure this path is correct
import { addLeadingZero, formatTime } from '../../../utils/helpers';
import Counter from './Counter/index';
import styles from './QuizHeader.module.css';

const QuizHeader = ({activeQuestion, totalQuestions, timer}) => {
  return (
    <Flex className={styles.spaceBetween} >
      <div>
        <span className={styles.activeQuestionNo}>
          {addLeadingZero(activeQuestion + 1)}
        </span>
        <span className={styles.totalQuestionNo}>
          /{addLeadingZero(totalQuestions)}
        </span>
      </div>
      <Flex>
        {/* Ensure formatTime returns a string */}
        {/* <Counter time={formatTime(timer)} /> */}
      </Flex>
    </Flex>
  );
};

QuizHeader.propTypes = {
  activeQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired, // Timer is expected as a number
};

export default QuizHeader;
