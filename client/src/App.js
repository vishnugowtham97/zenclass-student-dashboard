import "./App.css";
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Dashboard } from "./containers/Dashboard";
import { SideNavbar } from "./containers/SideNavbar";
import { Login } from "./containers/Login";
import { SignUp } from "./containers/Signup";
import { Courses } from "./containers/Courses";
import { CoursePage } from "./containers/CoursePage";
import { Classes } from "./containers/Classes";
import { Tasks } from "./containers/Tasks";
import { Certificates } from "./containers/Certificates";
import { Webcode } from "./containers/Webcode";
import { Capstone } from "./containers/Capstone";
import { TopNavBar } from "./containers/TopNavBar";
import { ForgotPassword } from "./containers/ForgotPassword";
import { ResetPassword } from "./containers/ResetPassword";
import { Requirement } from "./containers/Requirement";
import { Application } from "./containers/Application";
import { Syllabus } from "./containers/Syllabus";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname == "/signup";
  const isCoursePage = location.pathname.includes("/courses/");

  const onNavClick = (navItem, type) => {
    if (type === "signOut") {
      localStorage.clear();
    }
    navigate(`${navItem}`);
  };

  return (
    <div
      className={
        !isLoginPage && localStorage.getItem("user") ? "appContainer" : ""
      }
    >
      {!isLoginPage && localStorage.getItem("user") && <TopNavBar />}
      <div
        className={
          !isLoginPage && localStorage.getItem("user")
            ? "bodyContainer"
            : "loginContainer"
        }
      >
        {!isLoginPage && !isCoursePage && localStorage.getItem("user") && (
          <SideNavbar onClick={onNavClick} />
        )}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/webcode" element={<Webcode />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/requirement" element={<Requirement />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/application" element={<Application />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path={`reset-password/:id/:token`}
            element={<ResetPassword />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
