import React from 'react'

const App = ({ questions, answers }) => {
  return (
    <div>
      <h1>Q&A Tool</h1>
      {questions.map(({ questionId, content }) => (
        <div key={questionId}>
          <h3>{content}</h3>
          <div>
            {answers
              .filter((answers) => answers.questionId === questionId)
              .map(({ content, upvotes, answersId }) => (
                <div key={'x' + answersId}>
                  <span>
                    {content} - {upvotes}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
