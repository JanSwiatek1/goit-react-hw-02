import { useState } from 'react';
import PropTypes from 'prop-types';

export const SetButtons = ({IncrementGood, IncrementNeutral, IncrementBad}) => {

    return (
    <div>
        <button type="button" onClick={IncrementGood}>Good</button>
        <button type="button" onClick={IncrementNeutral}>Neutral</button> 
        <button type="button" onClick={IncrementBad}>Bad</button>
      </div>
    )
}


