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
            <div className="doctors border">Doctors Available</div>
            <div className="recentAppointments border">Recent appointments</div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
