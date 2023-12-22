import React, { useState } from "react";
import "./counter.css"; 

const Counter = ({ backgroundColor }) => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const increaseCounter = () => {
    setCount(count + 1);
    setErrorMessage("");
  };

  const decreaseCounter = () => {
    if (count === 0) {
      setErrorMessage("Counter cannot be zero");
    } else {
      setCount(count - 1);
      setErrorMessage("");
    }
  };

  const resetCounter = () => {
    setCount(0);
    setErrorMessage("");
  };

  return (
    <div className="counter-container" style={{ backgroundColor }}>
      <h2>Counter</h2>
      <span className="counter-value">Counter Value: {count}</span>
      <br />
      <button className="increase-button" onClick={increaseCounter}>
        INCREASE
      </button>
      <button className="decrease-button" onClick={decreaseCounter}>
        DECREASE
      </button>
      <button className="reset-button" onClick={resetCounter}>
        RESET
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Counter;
