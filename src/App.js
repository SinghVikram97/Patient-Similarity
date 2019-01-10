import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Stats from "./Stats/Stats";
import BarChart from "./BarChart/BarChart";
import Doctor from "./Doctor/Doctor";
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
            <div className="tl grow bg-white br3 shadow-5 appointment border">
              <BarChart />
            </div>
            <div className="tl pt3 br3 bg-white shadow-5 grow pl4 ml4 ma6 font doctors border">
              <h3>Doctors Available</h3>
              <div id="card-content">
                <div id="table-responsive">
                  <table id="recent-orders" cellPadding="10%">
                    <tbody>
                      <Doctor
                        url="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-4.png"
                        name="Jane Andre"
                        designation="Dentist"
                      />
                      <hr
                        style={{
                          color: "grey",
                          width: "323%"
                        }}
                      />
                      <Doctor
                        url="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-7.png"
                        name="Kail Reack"
                        designation="Cardiologist"
                      />
                      <hr
                        style={{
                          color: "grey",
                          width: "323%"
                        }}
                      />
                      <Doctor
                        url="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-1.png"
                        name="Shail Black"
                        designation="Dermatologist"
                      />
                      <hr
                        style={{
                          color: "grey",
                          width: "323%"
                        }}
                      />
                      <Doctor
                        url="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-11.png"
                        name="Zena Wali"
                        designation="Neurologist"
                      />
                      <hr
                        style={{
                          color: "grey",
                          width: "323%"
                        }}
                      />
                      <Doctor
                        url="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-6.png"
                        name="Colin Welch"
                        designation="Physiatrist"
                      />
                      <hr
                        style={{
                          color: "grey",
                          width: "323%"
                        }}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="ma6 recentAppointments border">
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
