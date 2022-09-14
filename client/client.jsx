import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(<App />, document.querySelector('#Container'))

let state

fetch('http://localhost:7777/data')
  .then((data) => data.json())
  .then((json) => {
    state = json
    console.log('Got the state', state)
    render()
  })

function handelModifyAnswerVotes(answerId, increment) {
  state.answers = state.answers.map((answer) =>
    answer.answerId !== answerId
      ? answer
      : { ...answer, upvotes: answer.upvotes + increment }
  )

  render()
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handelModifyAnswerVotes={handelModifyAnswerVotes} />,
    document.querySelector('#Container')
  )
}

// render()
