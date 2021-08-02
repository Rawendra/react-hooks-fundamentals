import React, { useState } from "react";

export default function CounterHook() {
    const initialCount=0;
  const [count, setCount] = useState(0);
  const handleIncrementBy5=()=>{
      for(let i=0;i<5;i++){ 
          setCount(prevState=>prevState+1)
      }
  }

  return (
    <div>
      <h1>THIS is counter hook</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount=>prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount=>prevCount - 1)}>Decrement</button>
      <button onClick={handleIncrementBy5}>IncrementBy 5</button>
      <hr />
      {count}
    </div>
  );
}
