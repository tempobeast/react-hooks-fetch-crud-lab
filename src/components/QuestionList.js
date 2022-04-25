import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onRemoveQuestion, onUpdateAnswer }) {
console.log(questions)
  const questionsToRender = questions.map((question) => <QuestionItem key={question.id} onUpdateAnswer={onUpdateAnswer} question={question} onRemoveQuestion={onRemoveQuestion}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToRender}</ul>
    </section>
  );
}

export default QuestionList;
