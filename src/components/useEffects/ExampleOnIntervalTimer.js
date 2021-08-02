import React, { useState, useEffect } from "react";

export default function ExampleOnIntervalTimer() {
  const [counter, setCounter] = useState(0);
  const [minute,setMinute] = useState(0);
  const [hour,setHour] = useState(0);
  const interval = 1000;

  useEffect(()=>{
    if(counter>60){
        setCounter(0);
        setMinute(prevState=>prevState+1)

    }
    if(minute>60){
        setMinute(0);
        setHour(prevState=>prevState+1)
    }
  },[counter,minute])

  const handleTimer = () => {
    setCounter((pValue) => pValue + 1);
  };

  useEffect(() => {
    console.log("setting the setinterval function");
    const event = setInterval(handleTimer, interval);

    return () => {
      clearInterval(event);
    };
  }, []);
  return <div>{hour} :{minute} : {counter}</div>;
}
