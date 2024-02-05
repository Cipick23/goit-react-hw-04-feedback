// FeedbackOptions.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import { Button } from 'react-bootstrap';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <section className={styles.statistics}>
        <h2>
          <span className={styles.black}>Please leave feedback</span>
        </h2>
        <div>
          {options.map(option => (
            <button
              key={option}
              variant="outline-success"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </section>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
