import PropTypes from 'prop-types';
import React from 'react';

export const Stat = ({ good, neutral, bad, total, PercentValue }) => {
  return(
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {PercentValue()}%</li>
    </ul>
  )
}

Stat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  PercentValue: PropTypes.number.isRequired,

};