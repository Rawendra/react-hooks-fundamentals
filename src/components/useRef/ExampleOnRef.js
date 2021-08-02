import React, { useEffect, useState, useRef } from "react";

function ExampleOnRef() {
  const [sample, setSample] = useState("");
  const ref1 = useRef(null);
  useEffect(() => {
    console.log("this is componentdidmout");
    console.log();
    ref1.current.childNodes[2].style = "background-color:dodgerblue";
  }, []);
  return (
    <div>
      <span>THis is an example on useRef</span>
      <div style={{ backgroundColor: "silver" }} ref={ref1}>
        <p>This is just a sample para</p>
        <input
          onChange={(e) => {
            setSample(e.target.value);
          }}
          value={sample}
        />
        <p>this is {sample}</p>
      </div>
    </div>
  );
}

export default ExampleOnRef;
