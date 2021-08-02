import React, { useState } from "react";
import ComponentB from "./ComponentB"; 

export default function ComponentA() {
  return (
    <div>
      This is A
        <ComponentB />
       
    </div>
  );
}
