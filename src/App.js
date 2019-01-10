import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Stats from "./Stats/Stats";
import BarChart from "./BarChart/BarChart";
import Doctor from "./Doctor/Doctor";
import Appointment from "./Appointment/Appointment";
class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Header />
          <main className="content">
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
            <div className="tl grow bg-white br3 shadow-5 appointment">
              <BarChart />
            </div>
            <div className="tl pt3 br3 bg-white shadow-5 grow pl4 ml4 ma6 font doctors">
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
            <div
              style={{ width: "87%" }}
              className="tl pl4 pt3 br3 bg-white shadow-5 grow pr6 ma6 font doctors recentAppointments"
            >
              <h3>Recent Appointments</h3>
              <div className="card-content pa5">
                <div className="table-responsive pl5">
                  <table id="recent-orders-doctors">
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <th>Doctor</th>
                        <th>Patients</th>
                        <th>Specialities</th>
                        <th>Timings</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <hr
                      style={{
                        color: "grey",
                        width: "730%"
                      }}
                    />
                    <tbody>
                      <Appointment
                        name="Jane Andre"
                        urls={[
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-4.png",
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-5.png",
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-6.png"
                        ]}
                        speciality="Dentist"
                        timing="8:00 A.M. - 12:00 P.M."
                        amount="$ 1200.00"
                        more="8"
                        color="dark-pink"
                      />
                      <hr
                        style={{
                          color: "#eae4e4",
                          borderStyle: "solid",
                          width: "730%"
                        }}
                      />
                      <Appointment
                        name="Kail Reack"
                        urls={[
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-7.png",
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-8.png"
                        ]}
                        speciality="Dermatologist"
                        timing="10:00 A.M. - 1:00 P.M."
                        amount="$ 1190.00"
                        more="5"
                        color="dark-green"
                      />
                      <hr
                        style={{
                          color: "#eae4e4",
                          borderStyle: "solid",
                          width: "730%"
                        }}
                      />
                      <Appointment
                        name="Shail Black"
                        urls={[
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-1.png",
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-2.png",
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-3.png"
                        ]}
                        speciality="Psychiatrist"
                        timing="11:00 A.M. - 2:00 P.M.  "
                        amount="$ 999.00"
                        more="3"
                        color="dark-blue"
                      />
                      <hr
                        style={{
                          color: "#eae4e4",
                          borderStyle: "solid",
                          width: "730%"
                        }}
                      />
                      <Appointment
                        name="Zena wall"
                        urls={[
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-11.png",
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-12.png"
                        ]}
                        speciality="Gastroenterologist "
                        timing="11:30 A.M. - 3:00 P.M."
                        amount="$ 1150.00"
                        color="purple"
                        more="2"
                      />
                      <hr
                        style={{
                          color: "#eae4e4",
                          borderStyle: "solid",
                          width: "730%"
                        }}
                      />
                      <Appointment
                        name="Colin Welch"
                        urls={[
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-6.png",
                          "https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/portrait/small/avatar-s-4.png"
                        ]}
                        speciality="Pediatrician"
                        timing="5:00 P.M. - 8:00 P.M."
                        amount="$ 1180.00"
                        more="4"
                        color="dark-pink"
                      />
                      <hr
                        style={{
                          color: "#eae4e4",
                          borderStyle: "solid",
                          width: "730%"
                        }}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
