import React, { Component } from "react";

import TeachingSchedule from "../media/8_lecturer_TeachingSchedule.png";
import Attendance from "../media/9_lecturer_Attendance.png";
import Dashboard from "../media/10_lecturer_Dashboard.png";

import ListTeachingSchedule from "./ListTeachingSchedule";
import ListClassStudentAttendance from "./ListClassStudentAttendence";
import ViewDashboard from "./ViewDashboard";

class LecturerMainPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center mt-4 d-flex justify-content-center row-cols-3">
            <div className="col col-lg-3 d-inline-flex justify-content-center m-1 customMinWidth">
              <div className="card icon white darken-1">
                <a href={"./teaching-schedule"} className="v-align">
                  <img
                    src={TeachingSchedule}
                    alt="TeachingSchedule"
                    className="img-fluid"
                    height="200"
                    width="200"
                  />
                </a>
              </div>
            </div>

            <div className="col col-lg-3 d-inline-flex justify-content-center m-1 customMinWidth">
              <div className="card icon white darken-1">
                <a href={"./class-student-attendance"} className="v-align">
                  <img
                    src={Attendance}
                    alt="Attendance"
                    className="img-fluid"
                    height="200"
                    width="200"
                  />
                </a>
              </div>
            </div>

            <div className="col col-lg-3 d-inline-flex justify-content-center m-1 customMinWidth">
              <div className="card icon white darken-1">
                <a href={"./dashboard"} className="v-align">
                  <img
                    src={Dashboard}
                    alt="Dashboard"
                    className="img-fluid"
                    height="200"
                    width="200"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LecturerMainPage;
