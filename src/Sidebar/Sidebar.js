import React, { Component } from "react";
import "./Sidebar.css";
export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-container">
        <div id="logo-container">
          <img
            align="left"
            id="logo"
            alt="logo"
            src="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/logo/logo.png"
          />
          <h3 className="ma1" id="logo-heading">
            Patient Similarity
          </h3>
        </div>
      </div>
    );
  }
}
