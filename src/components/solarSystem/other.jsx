import PropTypes from 'prop-types';
import { useState } from 'react';
import { countTotalFeedback } from './percent'


export const AlT = ({ initialValue = 0 }) => {
    const [good, setGood] = useState(initialValue);
    const [neutral, setNeutral] = useState(initialValue);
    const [bad, setBad] = useState(initialValue);
    
    const IncrementGood = () => {
        setGood(prevValueGood => prevValueGood + 1)
    }

    const IncrementNeutral = () => {
        setNeutral(prevValueNeutral => prevValueNeutral + 1)
    }

    const IncrementBad = () => {
        setBad(prevValueBad => prevValueBad + 1)
    }
    const total = good + neutral + bad;
    // dlaczego to mam zrobić jako metodę?

    const PercentValue = () => {

        if (total === 0) {
            
        return 0;
        }

        return Math.floor((good / total) * 100);
    };


    return (
        <div>
            <div>
                <button type="button" onClick={IncrementGood}>Good</button>
                <button type="button" onClick={IncrementNeutral}>Neutral</button>
                <button type="button" onClick={IncrementBad}>Bad</button>
            </div>
            <h1>Statistics</h1>
            <div>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: <PercentValue/> %</li>
                </ul>
            </div>
        </div>
    )
};

AlT.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired

};