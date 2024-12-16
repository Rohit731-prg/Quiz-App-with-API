import React from 'react'
import './Result.css'

function Result({isDark, score}) {
  return (
    <div className='result-container' style={isDark ? {backgroundColor : '#4d4d4d', color : 'white'} : {backgroundColor : 'antiquewhite', color : 'black'}}>
        <h3>{score >= 3 ? "Congrats!" : "Too Bad!"}</h3>
        <h2>Your Score :</h2>
        <h1>{score} / 10</h1>
        <button 
        style={{background: isDark ? "white" : "black", color: isDark ? "black" : "white"}}
        className='refresh' 
        onClick={() => location.reload()}>Refresh</button>
    </div>
  )
}

export default Result