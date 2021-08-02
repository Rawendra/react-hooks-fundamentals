import React, { useState } from "react";

export default function ExampleObjectHook() {
  const [obj, setObj] = useState({ fName: "", lName: "" });

  const handleName = (e, type) => {
    console.log(e.target.value, type);
    switch (type) {
      case 'firstName':
        setObj({ ...obj, fName: e.target.value });
        break;
      case 'lastName':
        setObj({ ...obj, lName: e.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form>
        FName:{" "}
        <input
          value={obj.fName}
          onChange={(e) => {
            handleName(e, "firstName");
          }}
          type="text"
        />
        LName:{" "}
        <input
          value={obj.lName}
          onChange={(e) => {
            handleName(e, "lastName");
          }}
          type="text"
        />
      </form>
      {JSON.stringify(obj)}
    </>
  );
}
