import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <nav>
              <div className="a">
                <img src={logo} alt="" />
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Menu</a>
                <a href="#">Features</a>
                <a href="#">Contact us</a>
              </div>
              <button>Booking Now</button>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
