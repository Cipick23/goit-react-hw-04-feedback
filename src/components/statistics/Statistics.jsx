// Statistics.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { Stack } from 'react-bootstrap';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <section className={styles.statistics}>
        <h2>
          <span className={styles.black}>Statistics</span>
        </h2>
        <Stack gap={3}>
          <div className="p-2">Good: {good}</div>
          <div className="p-2">Neutral: {neutral}</div>
          <div className="p-2">Bad: {bad}</div>
          <div className="p-2">Total: {total}</div>
          <div className="p-2">PositiveFeedback: {positivePercentage}%</div>
        </Stack>
      </section>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
