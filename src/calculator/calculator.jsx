import React, { useState } from "react";



const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => setInput((prev) => prev + value);
    const clearInput = () => setInput("");
    
    const calculateResult = () => {
        try {
            let result = eval(input);
            setInput(isNaN(result) || result === Infinity ? "NaN" : result.toString());
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
                    {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map((item) => (
                        <button 
                            key={item} 
                            className={item === "C" ? "clear" : item === "=" ? "operator" : ""}
                            onClick={item === "C" ? clearInput : item === "=" ? calculateResult : () => handleClick(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
