import { useState } from 'react'
import './App.css'
import { Stat } from './components/solarSystem/statistics'
import { Section } from './components/solarSystem/section'
import { Notification } from './components/solarSystem/notification'
import { SetButtons } from './components/solarSystem/buttons'


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
      console.log('Im here');
      
      //let { good } = this.state;
      return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  
  // const PercentValue = PercentValuee();



  return (
    <>
      <Section title="Sip Happens Café"></Section>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <SetButtons IncrementGood={IncrementGood} IncrementNeutral={IncrementNeutral} IncrementBad={IncrementBad} />
      <Section title="Statistics">
        {total > 0 ? (

          <Stat
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              PercentValue={PercentValue}
            />
          
        ) : (
            <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  )
}

export default App
