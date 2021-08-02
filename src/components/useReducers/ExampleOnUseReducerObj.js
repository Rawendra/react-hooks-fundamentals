import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const handleType = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const reducer = (state, action) => {
  return handleType(state, action);
};

export default function ExampleOnUseReducerObj() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count:{store.firstCounter}
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Incrementby 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrementby 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
