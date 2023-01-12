import "./main.css";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  const random = (min: number, max: number) => {
    min = Math.ceil(min as number);
    max = Math.floor(max as number);
    setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  if (isNaN(number)) {
    window.alert("Please enter a correct number!");
    setNumber(0);
  }

  return (
    <section className="mainWrapper">
      <div className="appWrapper">
        <section className="mainSection">
          <span className="text">Your number is:</span>
          <div className="currentNumber">{number}</div>
          <input
            onInput={(e) => {
              setMinNumber(Number(e.currentTarget.value));
            }}
            type="number"
            className="minValue"
            autoComplete="off"
            placeholder="Min"
            min={0}
            max={99999}
            maxLength={5}
          />
          <input
            onInput={(e) => {
              setMaxNumber(Number(e.currentTarget.value));
            }}
            type="number"
            className="maxValue"
            autoComplete="off"
            placeholder="Max"
            min={0}
            max={99999}
            maxLength={5}
          />
          <button
            className="button"
            onClick={() => {
              random(minNumber, maxNumber);
            }}
          >
            Generate
          </button>
        </section>
      </div>
    </section>
  );
};

export default App;
