import React, { Component } from "react";
import "./Features.css";
import home from "../../assets/home.png";
import car from "../../assets/delivery.png";
import smile from "../../assets/smile.png";
export default class Features extends Component {
  render() {
    return (
      <div className="container">
        <div className="c">
          <p>Features</p>
          <h1>Food with a New Passion</h1>
        </div>
        <div className="c1">
          <div className="c2">
            <img src={home} alt="" />
            <h1>Quality Food</h1>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
          <div className="c2">
            <img src={car} alt="" />
            <h1>Food Delivery</h1>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
          <div className="c2">
            <img src={smile} alt="" />
            <h1>Super Taste</h1>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
