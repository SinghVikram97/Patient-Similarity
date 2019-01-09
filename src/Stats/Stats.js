import React, { Component } from "react";
import "./Stats.css";
export default class Stats extends Component {
  render() {
    return (
      <div
        id="stats-container"
        className="center bg-white br3 -ns mv3 ba b--black-10 shadow-5 grow pointer"
      >
        <div id="align-self-center">
          <img alt="doctor" src={this.props.url} />
        </div>
        <div id="text-right">
          <h5>{this.props.heading}</h5>
          <h3>{this.props.number}</h3>
        </div>
      </div>
    );
  }
}
