import React, { useState } from "react";
import "./TaskTwelve.css";

export default function TaskTwelve() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");

  const handleClick = (index) => {
    if (boxes[index] !== "") return;

    const newBoxes = [...boxes];
    newBoxes[index] = turn;

    setBoxes(newBoxes);

    setTurn(turn === "X" ? "O" : "X");
  };

  const restartGame = () => {
    setBoxes(Array(9).fill(""));
    setTurn("X");
  };

  return (
    <div className="xo-container">
      <h2 className="title">Kaussik's XO Battleground</h2>

      <p className="turn-text">
        Turn : <span>{turn}</span>
      </p>

      <div className="board">
        {boxes.map((value, index) => (
          <div
            key={index}
            className={`cell ${value === "X" ? "x-style" : "o-style"}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>

      <button onClick={restartGame} className="reset-btn">
        Play Again
      </button>
    </div>
  );
}