import React, { useState } from "react";
import "./Calc.css"; 

function Calc() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      // Using Function constructor instead of eval for better security.
      // For a production-level application, a dedicated math expression parser library would be safer.
      const result = new Function('return ' + input)();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>

      <div className="buttons">
        <button className="red" onClick={handleClear}>C</button>
        <button className="red" onClick={handleBack}>←</button>
        <button className="red" onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="green" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default Calc;
