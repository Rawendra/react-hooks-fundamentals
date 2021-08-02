import React, { useState,useContext } from "react"; 
import{ UserContext,ProductContext} from './DashBoard'
export default function ComponentC() {
  const user=useContext(UserContext);
  const prodcut= useContext(ProductContext)
  return (
    <div>
      <UserContext.Consumer>
        {(elem) => {
          return [( <h1> {user.name}:{elem.mob} </h1>),<div>
            {prodcut.name}
          </div>]
        }}
      </UserContext.Consumer>
    </div>
  );
}
