import React, { useEffect, useState } from "react";
import "./Quiz.css";

function Quiz({ isDark, score, setScore, setCompo }) {
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://the-trivia-api.com/v2/questions");
      const data = await response.json();
      setAllData(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkAns = (item) => {
    setActive(true);
    setSelectedAnswer(item);
    if (item === allData[count].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setActive(false);
    setSelectedAnswer(null);
    setCount(count + 1);
    if (count === allData.length - 1) {
      setCompo(true);
    }
  };

  return (
    <div
      className="quiz-container"
      style={
        isDark
          ? { backgroundColor: "#4d4d4d", color: "white" }
          : { backgroundColor: "antiquewhite", color: "black" }
      }
    >
      {allData.length > 0 && count < allData.length && (
        <>
          <h4>Difficulty: {allData[count].difficulty}</h4>
          <h2>{allData[count].question.text}</h2>
          <div className="btns">
            {[...allData[count].incorrectAnswers, allData[count].correctAnswer].sort().map((item, index) => (
              <button
                key={index}
                onClick={() => checkAns(item)}
                disabled={active}
                className="btn"
                style={{
                  backgroundColor:
                    active && item === allData[count].correctAnswer
                      ? "green"
                      : active && item === selectedAnswer
                      ? "red"
                      : "",
                  color: active ? "white" : "",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
      <button onClick={nextQuestion} className="next">Next</button>
    </div>
  );
}

export default Quiz;
