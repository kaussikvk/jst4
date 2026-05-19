import React, { useState } from "react";
import "./index.css";

export default function TaskFour() {

  const [count, setCount] = useState(0);

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "main dark" : "main light"}>

      <div className="counter-box">

        <p className="top-text">
          Kaussik's counter & Theme Changer
        </p>

        <h1 className="count-number">
          {count}
        </h1>

        <div className="btn-row">

          <button
            className="plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <button
            className="minus"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

        </div>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>

      </div>

    </div>
  );
}