// const FoodMenus = [
//   {
//     week: "Monday",
//     breakfast: "egg",
//     lunch: "chicken",
//     dinner: "fish",
//   }, //o
//   {
//     week: "Tuesday",
//     breakfast: "omelette",
//     lunch: "spinash",
//     dinner: "nuts",
//   }, //1
//   {
//     week: "Wednesday",
//     breakfast: "pancake",
//     lunch: "seaweed",
//     dinner: "beef soup",
//   }, //2

import { Fragment } from "react";

//nuts =
//foodMenus[1].dinner;
//];

export const FoodMenu = ({ menus }) => {
  console.log(menus);

  //*********//
  //props break 예약아 문법 예러*/
  //******************* */

  return (
    <Fragment>
      {/* <div>
        <h2>{menus[0].week}'s menu</h2>
        <h3>breakfast: {menus[0].breakfast} </h3>
        <h3>lunch: {menus[0].lunch}</h3>
        <h3>dinner: {menus[0].dinner}</h3>
      </div> 
      <div>
        <h2>{menus[1].week}'s menu</h2>
        <h3>breakfast: {menus[1].breakfast} </h3>
        <h3>lunch: {menus[1].lunch}</h3>
        <h3>dinner: {menus[1].dinner}</h3>
      </div> 

      <div>
        <h2>{menus[2].week}'s menu</h2>
        <h3>breakfast: {menus[2].breakfast} </h3>
        <h3>lunch: {menus[2].lunch}</h3>
        <h3>dinner: {menus[2].dinner}</h3>
      </div> 
      
      */}
    </Fragment>
  );
};
