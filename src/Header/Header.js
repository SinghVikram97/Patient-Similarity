import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div id="header-container">
        <i className="fa fa-bars" aria-hidden="true" />
        <i className="fa fa-window-maximize" aria-hidden="true" />
        <span>Mega</span>
        <i className="fa fa-search" aria-hidden="true" />
        <div className="push">
          <div id="name">
            Hello, <strong>John Doe</strong>
          </div>
          <div>
            <img
              id="avatar"
              alt="avatar"
              src="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-19.png"
            />
          </div>
          <div>
            <i className="fa fa-flag" aria-hidden="true" />
          </div>
          <div>
            <i className="fa fa-bell" aria-hidden="true" />
          </div>
          <div>
            <i className="fa fa-envelope" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
