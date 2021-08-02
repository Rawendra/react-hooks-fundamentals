import React, { useState } from "react";
import { UserContext, ProductContext } from "./DashBoard";

export default function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(elem) => {
          return (
            <ProductContext.Consumer>
              {(prod) => {
                return (
                  <div>
                    <h1>
                      {" "}
                      {elem.name}:{elem.mob}:{" "}
                    </h1>
                    <h1>{prod.productName}</h1>
                  </div>
                );
              }}
            </ProductContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
