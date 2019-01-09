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
        <ul id="sidebar-contents">
          <li className="active">
            <a href="index.html">
              <i className="fa fa-home" aria-hidden="true" />
              <span>Dashboard Hospital</span>
            </a>
          </li>
          <li id="navigation-header">
            <span>Professional</span>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-address-book" aria-hidden="true" />
              <span>Appointment</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-user-md" aria-hidden="true" />
              <span>Doctors</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-users" aria-hidden="true" />
              <span>Patients</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-sticky-note" aria-hidden="true" />
              <span>Reports</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-credit-card" aria-hidden="true" />
              <span>Payments</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-clipboard" aria-hidden="true" />
              <span>Invoice</span>
            </a>
          </li>
          <li id="navigation-header">
            <span>Apps</span>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-calendar" aria-hidden="true" />
              <span>Calender</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-inbox" aria-hidden="true" />
              <span>Inbox</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-comments" aria-hidden="true" />
              <span>Chat</span>
            </a>
          </li>
          <li id="navigation-header">
            <span>User Interface</span>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-server" aria-hidden="true" />
              <span>Components</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-lock" aria-hidden="true" />
              <span>Authentication</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-file" aria-hidden="true" />
              <span>Form Layouts</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-table" aria-hidden="true" />
              <span>Form Wizard</span>
            </a>
          </li>
          <li className="li-item">
            <a href="index.html">
              <i className="fa fa-stack-overflow" aria-hidden="true" />
              <span>Chartjs</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
