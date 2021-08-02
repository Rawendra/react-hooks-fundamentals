import React, { useState } from "react";
import ComponentC from "./ComponentC";

export default function ComponentA() {
  return (
    <div>
      This is B
      <ComponentC />
    </div>
  );
}
