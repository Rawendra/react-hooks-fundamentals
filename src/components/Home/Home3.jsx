import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home3() {

  const [items, setItem] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  const getGata = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const list = ["apple", "nama", "mango"];
        res(list);
      }, 1000);
    });
  };

  useEffect(() => {
    getGata().then((res) => {
      setItem(res);
      setDisplayItems(res);
    });
  }, []);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const temp = [...items];
    const updatedItems = temp.filter((elem) => elem.startsWith(e.target.value));
    setDisplayItems(updatedItems);
  };

  const handleonClick = (e) => {
    console.log(e.target.childNodes[0].data);
  };
  
  return (
    <div className="wrapper">
      <div className="control">
        <input
          type="text"
          className="input"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
      </div>
      <div className="list is-hoverable">
        {displayItems.map((elem) => {
          return <div onClick={(e) => handleonClick(e)}>{elem}</div>;
        })}
      </div>
    </div>
  );
}
