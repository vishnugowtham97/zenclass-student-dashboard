import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sideNavbar.css";

export function SideNavbar({ onClick, type }) {
  const navigate = useNavigate();
  const [showNavBar, setNavBarVisibility] = useState(false);

  const handleMouseEnter = () => {
    setNavBarVisibility(true);
  };

  const handleMouseLeave = () => {
    setNavBarVisibility(false);
  };

  return (
    <div
      id="sideNavBar"
      className={showNavBar ? "navBarContainer" : "collapsedNavbar"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sideNavbar">
        <div className="navBarItems">
          <div
            className="dashboardWrapper"
            onClick={() => onClick("/dashboard")}
          >
            <img
              src={
                type === "course"
                  ? "../Assets/dashboard.png"
                  : "./Assets/dashboard.png"
              }
            />
            <h3>Dashboard</h3>
          </div>
          <div className="coursesText" onClick={() => onClick("/courses")}>
            <img
              src={
                type === "course"
                  ? "../Assets/courses.png"
                  : "./Assets/courses.png"
              }
            />
            <div>Courses</div>
          </div>
          <div className="coursesText" onClick={() => onClick("/classes")}>
            <img
              src={
                type === "course"
                  ? "../Assets/classes.png"
                  : "./Assets/classes.png"
              }
            />
            <div>Classes</div>
          </div>
          <div className="coursesText" onClick={() => onClick("/tasks")}>
            <img
              src={
                type === "course" ? "../Assets/tasks.png" : "./Assets/tasks.png"
              }
            />
            <div>Tasks</div>
          </div>
          <div
            className="certificateText"
            onClick={() => onClick("/certificates")}
          >
            <img
              src={
                type === "certificate"
                  ? "../Assets/certificates.png"
                  : "./Assets/certificates.png"
              }
            />
            <div>Certificate</div>
          </div>
          <div className="webcodeText" onClick={() => onClick("/webcode")}>
            <img
              src={
                type === "webcode"
                  ? "../Assets/webcode.png"
                  : "./Assets/webcode.png"
              }
            />
            <div>Webcode</div>
          </div>
          <div className="capstoneText" onClick={() => onClick("/capstone")}>
            <img
              src={
                type === "capstone"
                  ? "../Assets/capstone.png"
                  : "./Assets/capstone.png"
              }
            />
            <div>Capstone</div>
          </div>
          <div
            className="requirementText"
            onClick={() => onClick("/requirement")}
          >
            <img
              src={
                type === "requirement"
                  ? "../Assets/requirement.png"
                  : "./Assets/requirement.png"
              }
            />
            <div>Requirement</div>
          </div>
          <div
            className="applicationText"
            onClick={() => onClick("/application")}
          >
            <img
              src={
                type === "application"
                  ? "../Assets/application.png"
                  : "./Assets/application.png"
              }
            />
            <div>Application</div>
          </div>
          <div className="syllabusText" onClick={() => onClick("/syllabus")}>
            <img
              src={
                type === "syllabus"
                  ? "../Assets/syllabus.png"
                  : "./Assets/syllabus.png"
              }
            />
            <div>Syllabus</div>
          </div>
        </div>
        <div className="signOut" onClick={() => onClick("/login", "signOut")}>
          <img
            src={
              type === "course"
                ? "../Assets/signout.png"
                : "./Assets/signout.png"
            }
          />
          <div className="signout">Logout</div>
        </div>
      </div>
    </div>
  );
}
