import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container border">
        <div className="sidebar border">Sidebar</div>
        <div className="main border">
          <header className="border pa3">Header</header>
          <main className="content border">
            <div className="stats border">Stats</div>
            <div className="stats border">Stats</div>
            <div className="stats border">Stats</div>
            <div className="stats border">Stats</div>
            <div className="appointment border">Appointment</div>
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
