import React, { Component } from "react";
import "./Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="g">
          <div className="container">
            <div className="g1">
              <p>Contact </p>
              <h1>
                Food Stalls with Persons but also specialized equipment, Skills
                to manage.
              </h1>
            </div>
            <div className="g2">
              <form action="">
                <input
                  required
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your message"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
