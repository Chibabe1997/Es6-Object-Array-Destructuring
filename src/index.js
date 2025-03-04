//import animals, { useAnimals } from "./data";

//Destructuring arrays
// const [cat, dog] = animals;
// console.log(cat);

//Destructuring Objects
// const { name, sound } = cat;
// console.log(cat);
// const { name: catName, sound: catSound } = cat;
// const { name = "fluffy", sound = "purr" } = cat;
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;
// console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
