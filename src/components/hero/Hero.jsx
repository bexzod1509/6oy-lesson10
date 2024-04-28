import React, { Component } from "react";
import "./Hero.css";
import hero from "../../assets/heroimg.jpg";
export default class Hero extends Component {
  render() {
    return (
      <div className="container">
        <div className="b">
          <div>
            <h1>Making time a good time by making food the good food.</h1>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment,
            </p>
            <div className="b1">
              <button>Order Now</button>
              <h2>Food Details</h2>
            </div>
          </div>
          <img src={hero} alt="" />
        </div>
      </div>
    );
  }
}
