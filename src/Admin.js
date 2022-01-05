import React from 'react';
import { render } from "react-dom";
import './App.css'
import { NavLink } from 'react-router-dom';
import DashboardLogo from './components/Images/DashboardImages.png';
import MeetingLogo from './components/Images/MeetingIcon.jpeg'



function Admin(){

    return(
        
        <div className="App">
        <p className="InnerText">Welcome to the admin page<br/>
        You can Post messages on the dashboard, as well as meetings times from here</p>

        <div>
        <NavLink activeClassName="active" to="/Admin/DashboardPost" >
            <img src={DashboardLogo} />
            <br/>
            <p className="InnerText">Post to dashboard</p>
        </NavLink>
        <NavLink activeClassName="active" to="/Admin/MeetingPost">
            <img src={MeetingLogo} style={{width: "300px",height:"300px"}}/>
            <br/>
            <p className="InnerText">Add meetings</p>
        </NavLink>
        </div>

        </div>
    
    )

}

export default Admin;