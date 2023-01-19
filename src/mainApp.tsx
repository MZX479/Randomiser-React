import React from "react";
import "./mainApp.scss";

class Randomiser extends React.Component<
  {},
  { num: number; minNumber: number; maxNumber: number }
> {
  state = { num: 0, minNumber: 0, maxNumber: 0 };

  render(): React.ReactNode {
    return (
      <section className="mainWrapper">
        <div className="appWrapper">
          <section className="mainSection">
            <span className="text">Your number is:</span>
            <div className="currentNumber">{this.state.num}</div>
            <input
              onInput={(e) => {
                const value = e.currentTarget.value;
                this.setState({
                  minNumber: Number(value),
                });
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
                const value = e.currentTarget.value;

                this.setState({
                  maxNumber: Number(value),
                });
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
                if (this.state.minNumber > this.state.maxNumber) {
                  window.alert("Min number cannot be much than max number!");
                  return;
                }
                this.random(this.state.minNumber, this.state.maxNumber);
              }}
            >
              Generate
            </button>
          </section>
        </div>
      </section>
    );
  }

  random(min: number, max: number) {
    min = Math.ceil(min as number);
    max = Math.floor(max as number);
    this.setState({
      num: Math.floor(Math.random() * (max - min + 1)) + min,
    });
  }
}

export default Randomiser;
