import React, { Component } from "react";
import "./Menu.css";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/food3.png";
import food4 from "../../assets/food4.png";
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import plus from "../../assets/plus.png";
import stars from "../../assets/stars.png";
let data = [
  {
    id: 1,
    title: "Vegie Muffen",
    price: 16,
    img: food1,
  },
  {
    id: 2,
    title: "Salads",
    price: 12,
    img: food2,
  },
  {
    id: 3,
    title: "Burger",
    price: 10,
    img: food3,
  },
  {
    id: 4,
    title: "Delmonico Steak dish",
    price: 14,
    img: food4,
  },
  {
    id: 5,
    title: "Egg Masala",
    price: 9,
    img: food5,
  },
  {
    id: 6,
    title: "Peach Melba dish",
    price: 15,
    img: food6,
  },
];
export default class Menu extends Component {
  render() {
    return (
      <div className="container">
        <div className="c">
          <p>Menu</p>
          <h1>Food Full of treaty Love</h1>
          <h2>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers,{" "}
          </h2>
        </div>
        <div className="e">
          {data?.map((e) => (
            <div className="e1">
              <img src={e.img} alt="" />
              <div className="e2">
                <h1>{e.title}</h1>
                <h1>{e.price}$</h1>
              </div>
              <p>
                There are many things are needed to start the Fast Food
                Business.
              </p>
              <div className="e3">
                <img src={plus} alt="" />
                <img src={stars} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="e4">
          <button>Learn More</button>
        </div>
      </div>
    );
  }
}
