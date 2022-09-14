import React from 'react'

const App = ({ questions, answers, handelModifyAnswerVotes }) => {
  return (
    <div>
      <h1>Q&A Tool</h1>
      {questions.map(({ questionId, content }) => (
        <div key={questionId}>
          <h3>{content}</h3>
          <div>
            {answers
              .filter((answers) => answers.questionId === questionId)
              .map(({ content, upvotes, answerId }) => (
                <div key={'x' + answerId}>
                  <span>
                    {content} - {upvotes}
                  </span>

                  <button onClick={() => handelModifyAnswerVotes(answerId, 1)}>
                    +
                  </button>
                  <button onClick={() => handelModifyAnswerVotes(answerId, -1)}>
                    -
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
