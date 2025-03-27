import React, { useState } from "react";


const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const clearInput = () => {
        setInput("");
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <h1>React Calculator</h1>
                <input type="text" value={input} className="display" readOnly />
                <div className="button-grid">
                    {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map((item) =>
                        item === "C" ? (
                            <button key={item} className="clear" onClick={clearInput}>
                                {item}
                            </button>
                        ) : item === "=" ? (
                            <button key={item} className="operator" onClick={calculateResult}>
                                {item}
                            </button>
                        ) : (
                            <button key={item} onClick={() => handleClick(item)}>
                                {item}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
