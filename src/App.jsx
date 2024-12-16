import React from "react";
import { useState } from "react";
import "./App.css";
import Quiz from "./Components/Quiz/Quiz";
import Result from "./Components/Result/Result";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [compo, setCompo] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="main-container" style={isDark ? {backgroundColor : 'black'} : {backgroundColor : '#fff'}}>
      <h1>Quiz App</h1>
      <button
      style={isDark ? {backgroundColor : 'white', color : 'black'} : {backgroundColor : 'black', color : 'white'}}
      className="mode"
      onClick={() => setIsDark(!isDark)}
      >{isDark ? "Light Mode" : "Dark Mode"}</button>
      {compo ? (
        <Result isDark={isDark} score={score} />
      ) : (
        <Quiz isDark={isDark} score={score} setScore={setScore} setCompo={setCompo} />
      )}
    </div>
  );
}

export default App;
