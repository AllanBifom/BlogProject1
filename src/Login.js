import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Axios from "axios"
import { useNavigate } from "react-router-dom";



function Login() {
    const navigate = useNavigate();
    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username, 
            password: password}).then((response) => {
            if (response.data.message) {
                setloginstatus(response.data.message)
            }
            else{
                navigate("/dashboard")
            }
            })
    }
    const Button = styled.button`
    background-color: beige;
    color: purple;
    font-size: 10px;
    padding: 10px 60px;
    margin: 2px 0px;
    cursor: pointer;
    font-family: Zapfino;
    border-radius: 15px;
    `;
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const [loginstatus, setloginstatus] = useState('');

    return (
    <div className="App">
        <div className="modified-header">
            <div className="InnerText">
                Login to  Allan's Healing Foundation(AHF) and get started<br/>
            </div>
            <form className="RegistrationPage" style={{borderRadius: "10px", height: "550px"}}>
                <div className="InnerText">
                <div className="InnerText">
                <NavLink activeClassName="active" to="/Login">Login as User</NavLink>
                <text>/</text>
                <NavLink activeClassName="active" to="/StaffLogin">Login as Staff</NavLink>
                </div>
                User Login<br/>
                Enter Username:<br />
                <input type="text" onChange={(e)=> {setusername(e.target.value)}} autoComplete="new-password" style={{width: "275px", height: "25px", borderRadius: "10px"}}/><br />
                Enter Password:<br />
                <input type="password" onChange={(e)=> {setpassword(e.target.value)}} autoComplete="new-password" style={{width: "275px", height: "25px", borderRadius: "10px"}}/>
                </div>
        <Button type="button" onClick={login}>Login</Button ><br />
        <div className="InnerText">
            Don't have an account? <NavLink activeClassName="active" to="/signUp">SignUp</NavLink>
        </div>

        <h1 className= "AnotherInnerText">{loginstatus}</h1>
        
            </form>
            </div>
        </div>
    );
}

export default Login;