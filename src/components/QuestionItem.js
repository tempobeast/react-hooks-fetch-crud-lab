import React from "react";

function QuestionItem({ question, onRemoveQuestion, onUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(e) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
    method: "DELETE",
  })
    .then(resp => resp.json())
    .then(() => onRemoveQuestion(question))
  }

  function handleIndexChange(e) {
    console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": e.target.value
      }),
    })
    .then((resp) => resp.json())
    .then((newQ) => onUpdateAnswer(newQ))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleIndexChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
