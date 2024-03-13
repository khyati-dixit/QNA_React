import React from "react";
import { QUESTIONS } from "../questions";

const Question = ({ setAnswers, answers, findFinalScore }) => {
  return (
    <div className="question_box">
      <p>TODO</p>
      {Object.keys(QUESTIONS).map((el) => (
        <>
          <p>{QUESTIONS[el]}</p>
          <div className="input_box">
            <input
              type="radio"
              id="yes"
              name={`${el}-answer`}
              value="Yes"
              onChange={(e) => setAnswers({ ...answers, [el]: e.target.value })}
            />
            <label for="yes">Yes</label>
          </div>

          <br />
          <div className="input_box">
            <input
              type="radio"
              id="no"
              name={`${el}-answer`}
              value="No"
              onChange={(e) => setAnswers({ ...answers, [el]: e.target.value })}
            />
            <label for="no">No</label>
          </div>
        </>
      ))}
      <button
        className="score_btn"
        type="submit"
        onClick={() => findFinalScore()}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
