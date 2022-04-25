import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestions(data))
  }, [])
  

  function onUpdateAnswer(updatedItem) {
    const updateQuestions = questions.map((question) => {
    if (question.id === updatedItem.id) {
      return updatedItem
    } else {
      return question
    }
    })
    setQuestions(updateQuestions)
  }

  function onFormSubmit(obj) {
    setQuestions([...questions, obj])
  }

  function onRemoveQuestion(toDelete) {
    const updateQuestions = questions.filter((question) => question.id !== toDelete.id)
    setQuestions(updateQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={onFormSubmit}/> : 
      <QuestionList onUpdateAnswer={onUpdateAnswer} questions={questions} onRemoveQuestion={onRemoveQuestion}/>}
    </main>
  );
}

export default App;
