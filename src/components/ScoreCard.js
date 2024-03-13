import React from "react";

const ScoreCard = ({ scoreActive, handleReset }) => {
  return (
    <div className="score_box">
      <p>Your Score</p>
      <br />
      <p>{scoreActive.score}</p>
      <button className="score_btn" type="submit" onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
};

export default ScoreCard;
