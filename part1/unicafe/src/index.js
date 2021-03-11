import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} >{text}</button>
  )
}

const Statistic = ({ text, data }) => {
  return (
    <>
      <td>{text}:</td>
      <td>{data}</td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const allFeedback = good + neutral + bad

  if (allFeedback === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (((good - bad) / allFeedback) || 0).toFixed(2)
  const positive = ((good / allFeedback * 100) || 0).toFixed(2)

  return (
    <table>
      <tbody>
        <tr>
          <Statistic text="Good" data={good} />
        </tr>
        <tr>
          <Statistic text="Neutral" data={neutral} />
        </tr>
        <tr>
          <Statistic text="Bad" data={bad} />
        </tr>
        <tr>
          <Statistic text="All" data={allFeedback} />
        </tr>
        <tr>
          <Statistic text="Average" data={average} />
        </tr>
        <tr>
          <Statistic text="Positive" data={positive} />
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
