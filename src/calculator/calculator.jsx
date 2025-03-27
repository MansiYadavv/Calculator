import React, { useState } from "react";
import "./App.css"; // Import the CSS file

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      if (!expression) {
        setResult("Error");
        return;
      }
      const evaluatedResult = eval(expression);
      if (evaluatedResult === Infinity) {
        setResult("Infinity");
      } else if (isNaN(evaluatedResult)) {
        setResult("NaN");
      } else {
        setResult(evaluatedResult);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h1>Calculator</h1>
        <input type="text" className="display" value={expression} readOnly />
        <div className="display">{result}</div>
        <div className="button-grid">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
            <button
              key={btn}
              className={`button ${btn === "=" ? "operator" : ""} ${btn === "C" ? "clear" : ""}`}
              onClick={() =>
                btn === "C" ? handleClear() : btn === "=" ? handleCalculate() : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
