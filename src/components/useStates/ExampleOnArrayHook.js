import React, { useState } from "react";

export default function ExampleOnArrayHook() {
  const [arr, setArr] = useState([]);
  const [item, setItem] = useState("");
  const addItem = (e) => {
    console.log(e);
    e.preventDefault()
    
    setArr((prevState) => [...prevState, item]);
    setItem("")
  };
  const deleteItem=(key)=>{
      const items=[...arr];
     const filteredItems= items.filter((i,k)=>k!=key)
     setArr(filteredItems)
  }
  return (
    <form onSubmit={addItem}>
      Item : <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button
        onClick={(e) => {
          addItem(e);
        }}
      >
        ADD ITEM
      </button>
      <ul>
          {arr.map((item,key)=>{
              return <li key={key+item}>
                  {item}
                  <button  onClick={()=>deleteItem(key)} >DELETE</button>
              </li>
          })}
      </ul>
    </form>
  );
}
