import React, { useState, useEffect } from "react";
import ScoreCard from "./components/ScoreCard";
import Question from "./components/Question";

const App = () => {
  const [answers, setAnswers] = useState({});
  const [scoreActive, setScoreActive] = useState({ flag: false, score: 0 });

  useEffect(() => {
    let score = localStorage.getItem("YourScore");
    if (score) {
      setScoreActive({ flag: true, score: score });
    }
  }, []);

  const findFinalScore = async () => {
    let totalQuestion = Object.keys(answers).length;
    let yesCount = 0;

    for (const value of Object.values(answers)) {
      if (value === "Yes") {
        yesCount++;
      }
    }

    yesCount = (yesCount * 100) / totalQuestion;
    localStorage.setItem("YourScore", yesCount);
    setScoreActive({ flag: true, score: yesCount });
  };

  const handleReset = () => {
    setAnswers({});
    setScoreActive({flag: false, score: 0})
  };

  return (
    <div className="main__wrap">
      <main className="container">
        {scoreActive.flag ? (
          <ScoreCard scoreActive={scoreActive} handleReset={handleReset} />
        ) : (
          <Question
            setAnswers={setAnswers}
            answers={answers}
            findFinalScore={findFinalScore}
          />
        )}
      </main>
    </div>
  );
};

export default App;
