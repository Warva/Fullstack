import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [selected, setSelected] = useState(0)
  var points = new Uint8Array(6)

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const vote = (props) => {
    const copy = [...points]
    copy[props.point] += 1 
  }

  return (
    <div>
      <p>{anecdotes[selected]} <br />
      has {points[anecdotes[selected]]} votes
      </p>
      <p>
      <Button text={'vote'} handleClick={vote} />
      <Button text={'next anecdote'} handleClick={nextAnecdote} />
      </p>
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


export default App