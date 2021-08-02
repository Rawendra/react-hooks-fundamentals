import React, { useState } from "react";
import ExampleOnMouseCursor from "./ExampleOnMouseCursor";
export default function ExampleOnWillUnmountHook() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowChild(!showChild);
        }}
      >
        TOGGLE
      </button>
      {showChild && <ExampleOnMouseCursor />}
    </div>
  );
}
