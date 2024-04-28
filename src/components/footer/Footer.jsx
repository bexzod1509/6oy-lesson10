import React, { Component } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="h">
              <div className="h1">
                <img src={logo} alt="" />
                <p>www.company name.com</p>
                <p>companyname@gmail.com</p>
                <p>Phone: +7 485-118-03-25</p>
              </div>
              <div>
                <h1>Home</h1>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <p>UI & UX Design</p>
                <p>Web Design</p>
              </div>
              <div>
                <h1>Menu</h1>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <p>UI & UX Design</p>
                <p>Web Design</p>
              </div>
              <div>
                <h1>Company</h1>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <div className="h2">
                  <img src={instagram} alt="" />
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
