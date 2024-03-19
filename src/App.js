import { useState } from "react";
import "./styles.css";

export default function App() {
  const btnStyle = { padding: "0px 5px", margin: "5px 5px" };
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count * step);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="App">
      <div className="step">
        Step:&nbsp;
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        {step}
      </div>
      <div className="count">
        Count:&nbsp;
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <div className="date">
        <p>
          {step * count === 0
            ? "Today is "
            : step * count > 0
            ? `${Math.abs(step * count)} days from today is `
            : `${Math.abs(step * count)} days ago was `}
          {date.toDateString()}
        </p>
      </div>
      {(step !== 1 || count !== 0) && (
        <div className="reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}
