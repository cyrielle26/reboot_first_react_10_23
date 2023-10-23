import { useState } from "react";

export const EventEx = () => {
  //let num = 0;

  //   const plusHandler = () => {
  //     //check if the event works
  //        console.log("event ON");
  //     //check if the num value works
  //        console.log(num);
  //     //output only in console
  //     //problem react Single Page Application
  //     // it doesn't get the upload value
  //     so you can't use this const form
  //        num++;
  //  };

  //Hook
  const [num, setNum] = useState(0);
  console.log(num);

  //plusHandler const + method
  const plusHandler = () => {
    //method
    setNum(num + 1);
    //** num++ ---don't work because SPA just num + 1 works
  };

  //minusHandler const + method
  const minusHandler = () => {
    //method
    setNum(num - 1);
  };

  return (
    <div>
      <h3>Number Event when clicking</h3>
      <h3>{num}</h3>

      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>

      {/*  if the event is simple
     you don't need to write const event
     you can simplify the code like this

      <button onClick={() => setNum(num+1)}>+</button>
      <button onClick={() => setNum(num-1)}>-</button>
     
     */}
    </div>
  );
};
