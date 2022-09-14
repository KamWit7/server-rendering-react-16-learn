export function handelModifyAnswerVotes(answers, answerId, increment) {
  return answers.map((answer) =>
    answer.answerId !== answerId
      ? answer
      : { ...answer, upvotes: answer.upvotes + increment }
  )
}
