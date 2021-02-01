import React, { useState } from 'react'

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [clicks, setCliks] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setCliks(clicks + 1)
  }
  
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setCliks(clicks + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setCliks(clicks + 1)
  }

  return (
    <div>
      <Header title={'give feedback'} />
      <Button text={'good'} handleClick={increaseGood} />
      <Button text={'neutral'} handleClick={increaseNeutral} />
      <Button text={'bad'} handleClick={increaseBad} />
      <Statistics title={'statistics'} clicks={clicks} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if(props.clicks === 0) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>{props.title}</h1>
        <table>
          <tbody>
          <tr>
            <StatisticLine text="good" value ={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value ={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value ={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value ={props.good + props.neutral + props.bad} />
          </tr>
          <tr>
            <StatisticLine text="average" value ={((props.good*1)+(props.neutral*0)+(props.bad*-1))/(props.good + props.neutral + props.bad)} />
          </tr>
          <tr>
            <StatisticLine text="positive" value ={props.good/(props.good + props.neutral + props.bad)*100} />
          </tr>
          </tbody>
        </table>
    </div>
  )
  
}

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

export default App