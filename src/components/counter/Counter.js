import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setinputValue] = useState(1);
  const handleOnChange=(e)=>{
     setinputValue(e.target.value)
  }
  return (
    <div>
      <h1 data-testid="data-header-h1">This is awesome</h1>
      <h2 data-testid="counter">{counter}</h2>
      <button data-testid="add-btn">+</button>
      <input data-testid="input-element" type="number" onChange={handleOnChange} value={inputValue} />
      <button data-testid="subtract-btn">-</button>
    </div>
  );
}

export default Counter;
