import React from "react";
import "./QuestionAnswer.css";

function QuestionAnswer({ question, answer }) {
  return (
    <>
      <div className="qna__wrapper">
        <div className="title">
          <h2>{question}</h2>
        </div>
        <div className="answer">
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
}

export default QuestionAnswer;
