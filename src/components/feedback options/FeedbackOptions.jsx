// FeedbackOptions.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import { Button } from 'react-bootstrap';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section className={styles.statistics}>
      <h2>
        <span className={styles.black}>Please leave feedback</span>
      </h2>
      <div>
        {options.map(option => (
          <Button
            key={option}
            variant="outline-success"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
