import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Axios from "axios"
import { useNavigate } from "react-router-dom";

function SignUp(){
    const navigate = useNavigate();
    const register = () => {
        if(confirmpassword !== password){
            setregisterstate("Passwords do no match")
        }
        else{
        Axios.post('http://localhost:3001/register', {
            username: username, 
            password: password}).then((response)=> {
                console.log(response)
            })
            navigate("/Login")
        }
        
    }
    const Button = styled.button`
    background-color: beige;
    color: purple;
    font-size: 10px;
    padding: 10px 60px;
    margin: 2px 0px;x
    cursor: pointer;
    font-family: Zapfino;
    border-radius: 10px
    `;
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('')
    const [registerstate, setregisterstate] = useState('')


    
return(
    <div className="App">
        <div className="modified-header">
            <div className="InnerText" style={{fontSize: "20px"}}>
                    Create your account now
                </div>
            <form className="RegistrationPage" style={{borderRadius: "10px", height:"450px"}}>
                <div className="InnerText">
                <NavLink activeClassName="active" to="/SignUp">SignUp as User</NavLink>
                <text>/</text>
                <NavLink activeClassName="active" to="/StaffSignUp">SignUp as Staff</NavLink>
                </div>
                
                <div className="InnerText" style={{textAlign: "left"}}>
                    Username: <input type="text" onChange={(e)=> {setusername(e.target.value)}} autoComplete="new-password" style={{width: "275px", height: "25px", borderRadius: "10px"}}/><br/>
                    Password: <input type="password" onChange={(e)=> {setpassword(e.target.value)}} autoComplete="new-password" style={{width: "275px", height: "25px", borderRadius: "10px"}}/><br/>
                    Confirm Password: <input type="password" onChange={(e)=> {setconfirmpassword(e.target.value)}} autoComplete="new-password" style={{width: "275px", height: "25px", borderRadius: "10px"}}/><br/>
                </div>
                <div className="InnerText">
                    <br/><Button type="button" onClick={register} >Create Account</Button ><br/>
                    Already have an account? <NavLink activeClassName="active" to="/Login">SignIn</NavLink>
                </div>
                <br/>

                <h1 className= "AnotherInnerText">{registerstate}</h1>
            </form>

        </div>
        
    </div>
)

}
export default SignUp;