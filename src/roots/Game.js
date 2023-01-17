import React, { useState } from "react";
import "../game.css";

const Game = () => {
  const [red, setred] = useState(0);
  const [blue, setblue] = useState(0);
  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 80) {
      setblue(blue + 1);
    } else if (e.keyCode === 81) {
      setred(red + 1);
    }
  });
  return (
    <>
      <div className="text">
        <h1>
          <span>Q</span> key-red
        </h1>
        <h1>
          <span>P</span> key-blue
        </h1>
      </div>
      <div className="section">
        <div className="box">
          <div className="bg-1" style={{ width: `${red}%` }}></div>
        </div>
        <div className="box">
          <div className="bg-2" style={{ width: `${blue}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default Game;
