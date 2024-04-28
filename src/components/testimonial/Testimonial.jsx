import React, { Component } from "react";
import "./Testimonial.css";
import avatar from "../../assets/avatar.png";
import star from "../../assets/4stars.png";
export default class Testimonial extends Component {
  render() {
    return (
      <div className="container">
        <div className="c">
          <p>Testimonial</p>
          <h1>Making Food great again and again</h1>
          <h2>
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc to make your.
          </h2>
        </div>
        <div className="f">
          <img className="f1" src={avatar} alt="" />
          <p>
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc very successful to make your.
          </p>
          <img className="f2" src={star} alt="" />
          <p>Augusta W. Reynoso</p>
          <h2>UI&UX DeSIGNER</h2>
        </div>
      </div>
    );
  }
}
