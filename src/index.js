import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Meetings from "./Meetings";
import Staff from "./Staff";
import About from "./About";
import Contact from "./Contact"
import StaffSignUp from "./StaffSignUp"
import StaffLogin from "./StaffLogin"
import Admin from "./Admin";
import DashboardPost from "./DashboardPost";
import MeetingPost from "./MeetingPost";
import BlogDetails from "./blogDetails";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Meetings" element={<Meetings/>} />
      <Route path="/Staff" element={<Staff />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/StaffSignUp" element={<StaffSignUp />} />
      <Route path="/StaffLogin" element={<StaffLogin />} />
      <Route path= "/Admin" element={<Admin />} />
      <Route path ="Admin/DashboardPost" element={<DashboardPost />} />
      <Route path ="Admin/MeetingPost" element={<MeetingPost />} />
      <Route path ="/blogs/:id" element={<BlogDetails />} />
    </Routes>
    
  </BrowserRouter>,
  rootElement
);