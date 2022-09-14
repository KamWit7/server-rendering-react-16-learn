import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { handelModifyAnswerVotes } from '../shared/utility'
// ReactDOM.render(<App />, document.querySelector('#Container'))

let state

fetch('http://localhost:7777/data')
  .then((data) => data.json())
  .then((json) => {
    state = json
    console.log('Got the state', state)
    render()
  })

function handlerVote(answerId, increment) {
  state.answers = handelModifyAnswerVotes(state.answers, answerId, increment)
  fetch(`vote/${answerId}?increment=${increment}`)

  render()
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handelModifyAnswerVotes={handlerVote} />,
    document.querySelector('#Container')
  )
}

// render()
