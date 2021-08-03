import React, { useState } from "react";
import "./App.css";

export const App = () => {
  let [player1Counter, setPlayer1Counter] = useState(10);
  let [player2Counter, setPlayer2Counter] = useState(10);

  let [counters, setCounters] = useState({
    c1: 10,
    c2: 10,
  });

  return (
    <div>
      <div>
        <div>Иван Иванович</div>
        <div>{player1Counter}</div>
        <button
          onClick={() => {
            setPlayer1Counter((actual) => actual + 1);
          }}
        >
          +
        </button>
      </div>
      <hr />
      <div>
        <div>Пётр Петрович</div>
        <div>{player2Counter}</div>
        <button
          onClick={() => {
            setPlayer2Counter((actual) => actual + 1);
          }}
        >
          +
        </button>
      </div>
      <hr />
      <button
        onClick={() => {
          setPlayer1Counter((actual) => actual - 1);
          setPlayer2Counter((actual) => actual - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setPlayer1Counter(10);
          setPlayer2Counter(10);
        }}
      >
        RESET
      </button>
    </div>
  );
};
