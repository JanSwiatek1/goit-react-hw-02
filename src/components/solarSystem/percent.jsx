import { useState } from 'react';

export const countTotalFeedback = (initialValue=0) => {
    const [Percent, setPer] = useState(initialValue);
    const totalValue = prevValueGood + prevValueNeutral + prevValueBad;
    const per = (prevValueGood*100)/totalValue
    setPer(per)

    return (

        <div>Positive feedback {Percent}</div>
    )
}

//const countPositiveFeedbackPercentage()