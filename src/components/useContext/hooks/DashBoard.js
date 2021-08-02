import React, { useState } from "react";
import ComponentA from "./ComponentA";
export const UserContext = React.createContext();
export const ProductContext=React.createContext();
export default function DashBoard() {

  const element={
    name:'Rawendra',
    mob:9626352975
  }

  const product={
    prodId:'12233',
    productName:'Potaotes'
  }
  return (
    <div>
      {JSON.stringify(element)}
      <hr />
      {'from hooks'}
      <UserContext.Provider value={element}>
        <ProductContext.Provider value={product} >
         <ComponentA />
        </ProductContext.Provider>
       
      </UserContext.Provider>
    </div>
  );
}
