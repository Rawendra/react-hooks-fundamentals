import React, { useState, useEffect } from "react";

export default function ExampleOnCounterOne() {
  const [count, setCount] = useState(0);
  const [name,setName]=useState('')
  useEffect(() => {
      console.log('useffect')
    document.title = `you clicked ${count} times`;
  },[count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLICK</button>
      <h1>Count:{count} </h1>
      <h2>NAME: </h2><input type="text" value={name} onChange={e=>setName(e.target.value)} />
    </div>
  );
}
