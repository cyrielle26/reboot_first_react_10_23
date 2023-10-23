import { FoodMenu } from "./FoodMenu";
import { Intro } from "./Intro";

//array
const FoodMenus = [
  {
    week: "Monday",
    breakfast: "egg",
    lunch: "chicken",
    dinner: "fish",
  }, //o
  {
    week: "Tuesday",
    breakfast: "omelette",
    lunch: "spinash",
    dinner: "nuts",
  }, //1
  {
    week: "Wednesday",
    breakfast: "pancake",
    lunch: "seaweed",
    dinner: "beef soup",
  }, //2
];

const PropsEx = () => {
  return (
    <div>
      <Intro name={"Cyrielle"} age={"32"} job={"Developper"} />
      <Intro name={"Leon"} age={"36"} job={"Engineer"} />
      <br />
      <br />
      {/* <FoodMenu
        week={FoodMenus[0].week}
        breakfast={FoodMenus[0].breakfast}
        lunch={FoodMenus[0].lunch}
        dinner={FoodMenus[0].dinner}
      /> */}

      <FoodMenu menus={FoodMenus} />
    </div>
  );
};

export default PropsEx;
