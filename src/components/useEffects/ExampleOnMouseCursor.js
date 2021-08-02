import React, { useState, useEffect } from "react";

export default function ExampleOnMouseCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const logMousePosition = (e) => {
    console.log("mouseEvent");
    setPos((prevState) => {
      return { ...prevState, x: e.clientX, y: e.clientY };
    });
  };
  useEffect(() => {
    console.log("adding the eventListener");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("removing the eventListener");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <table style={{backgroundColor:'silver' }}>
        <tr>
          <td>{pos.x}</td>
          <td>{pos.y}</td>
        </tr>{" "}
      </table>
    </div>
  );
}
