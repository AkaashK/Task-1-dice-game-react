import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    player: 0,
    aiValue: 0,
    win: 0,
    loss: 0,
    draw: 0,
    message: "",
  });

  const playGame = () => {
    const randomValue = {
      player: Math.floor(Math.random() * 6) + 1,
      aiValue: Math.floor(Math.random() * 6) + 1,
    };

    setValues(Object.assign(values, randomValue));

    let { win, loss, draw } = values;

    if (values.player > values.aiValue) {
      setValues({
        ...values,
        win: win + 1,
        message: "Player wins",
      });
      return;
    }
    if (values.player < values.aiValue) {
      setValues({
        ...values,
        loss: loss + 1,
        message: "AI wins",
      });
      return;
    }

    if (values.player === values.aiValue) {
      setValues({
        ...values,
        draw: draw + 1,
        message: "Draw",
      });
      return;
    }
  };

  const clearGame = () => {
    setValues({
      player: 0,
      aiValue: 0,
      win: 0,
      loss: 0,
      draw: 0,
      message: "",
    });
  };

  return (
    <div className="App">
      <button onClick={playGame}>Play Game</button>
      <p>
        player: {values.player} AI:{values.aiValue}
      </p>
      <br />
      <p>
        win: {values.win} loss:{values.loss} draw: {values.draw}
      </p>
      <button onClick={clearGame}>Clear</button> <br />
      <p id="showMessage">{values.message}</p>
    </div>
  );
};

export default App;
