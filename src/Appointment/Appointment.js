import React, { Component } from "react";
import "./Appointment.css";
export default class Appointment extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <ul className="PatientList">
            {this.props.urls.map((url, index) => {
              return (
                <li key={index} className="avatar avatar-sm">
                  <img alt="avatar" src={url} />
                </li>
              );
            })}
            <li className="avatar avatar-sm">
              <span>+{this.props.more} more</span>
            </li>
          </ul>
        </td>
        <td>
          <a
            className={`f7 br3 link dim ba ph3 pv2 mb2 dib ${this.props.color}`}
            href="#0"
          >
            {this.props.speciality}
          </a>
        </td>
        <td>{this.props.timing}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }
}
