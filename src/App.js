import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Stats from "./Stats/Stats";
class App extends Component {
  render() {
    return (
      <div className="App container border">
        <div className="sidebar border">
          <Sidebar />
        </div>
        <div className="main border">
          <Header />
          <main className="content border">
            <Stats
              url="https://img.icons8.com/color/48/000000/medical-doctor.png"
              heading="Doctors Available"
              number="122"
            />
            <Stats
              url="https://img.icons8.com/color/48/000000/stethoscope.png"
              heading="Visiting Doctors"
              number="34"
            />
            <Stats
              url="https://img.icons8.com/color/48/000000/planner.png"
              heading="Today's Enquiry"
              number="3.5K"
            />
            <Stats
              url="https://img.icons8.com/color/48/000000/bedroom.png"
              heading="Rooms Available"
              number="179"
            />
            <div className="tl appointment border">
              <div> Hello World! </div>
              <div> Hello again!</div>
            </div>
            <div className="doctors border">
              <h3>Doctors Available</h3>
              <div>Doctor Details</div>
              <div>Doctor Details</div>
              <div>Doctor Details</div>
              <div>Doctor Details</div>
            </div>
            <div className="recentAppointments border">
              <h3>Recent appointments</h3>
              <div>Appointment details</div>
              <div>Appointment details</div>
              <div>Appointment details</div>
              <div>Appointment details</div>
              <div>Appointment details</div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
