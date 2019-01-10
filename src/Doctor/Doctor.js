import React, { Component } from "react";
import "./Doctor.css";
export default class Doctor extends Component {
  render() {
    return (
      <tr className="borderBottom">
        <td>
          <div className="avatar">
            <img id="dp" alt="avatar" src={this.props.url} />
          </div>
        </td>
        <td>
          <div className="name">{this.props.name}</div>
          <div className="designation pl1">{this.props.designation}</div>
        </td>
        <td className="tr" style={{ paddingRight: "7%" }}>
          <a
            className="tc pr3 br3 f6 link dim ba bw1 ph3 pv2 mb2 dib green"
            href="#0"
          >
            Book Appointment
          </a>
        </td>
      </tr>
    );
  }
}
