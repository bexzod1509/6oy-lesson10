import React, { Component } from "react";
import "./About.css";
import women from "../../assets/women.png";
export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="d">
          <img src={women} alt="" />
          <div>
            <p>About us</p>
            <h1>
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.
            </h1>
            <h2>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </h2>
            <button>Read More</button>
          </div>
        </div>
      </div>
    );
  }
}
