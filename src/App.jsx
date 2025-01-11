import { useState } from 'react'
import './App.css'
// import { AlT } from './components/solarSystem/other'
import { Stat } from './components/solarSystem/statistics'
import { Section } from './components/solarSystem/section'
import { Notification } from './components/solarSystem/notification'
import { SetButtons } from './components/solarSystem/buttons'
import { countTotalFeedback } from './components/solarSystem/percent'

const App = ({ initialValue = 0 }) => {

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
  
  //   const total = () => {
  //   return good + neutral + bad;
  // };

    const PercentValue = () => {
      const { good } = this.state;
      return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  
  // const PercentValue = PercentValuee();



  return (
    <>
      <Section title="Please leave feedback"></Section>
      <SetButtons IncrementGood={IncrementGood} IncrementNeutral={IncrementNeutral} IncrementBad={IncrementBad} />
      <Section title="Statistics">
        {total > 0 ? (

          <Stat
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={PercentValue()}
            />
          
        ) : (
            <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  )
}

export default App
