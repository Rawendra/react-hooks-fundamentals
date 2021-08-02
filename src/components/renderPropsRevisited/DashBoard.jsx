import axios from "axios";
import React, { useState, useEffect } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
const DashBoard2 = (props) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [todosToDisplay, setTodosToDisplay] = useState([]);
  const [next, setNext] = useState(0);

  useEffect(() => {
    if (!todos.length) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          console.log(response);
          setTodos(response.data);
          setTodosToDisplay(response.data.slice(next, next + 10));
        });
    } else {
      setTodosToDisplay(todos.slice(next, next + 10));
    }
  }, [next]);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      Dashboard2:Count:{count}
      <button
        onClick={() => {
          handleCount();
        }}
      >
        Click
      </button>
      <hr />
      {todosToDisplay.map((elem) => {
        return (
          <div key={elem.id}>
            {" "}
            <span>{elem.title}</span>{" "}
            {elem.completed ? (
              <span style={{ background: "silver" }}>DONE</span>
            ) : (
              <span style={{ background: "tomato" }}>NOT YET</span>
            )}{" "}
          </div>
        );
      })}
      <hr />
      <button onClick={() => setNext((prevNext) => prevNext + 10)}>Next</button>
      <button onClick={() => setNext((prevNext) => prevNext - 10)}>
        Previous
      </button>
    </div>
  );
};

export default DashBoard2;
