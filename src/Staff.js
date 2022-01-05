import Navbar from "./components/Navbar";
import staffImage from "./components/Images/IMG_3390.jpg"
import { useState, useEffect } from "react";
import Axios from 'axios';

function Staff(){
    const [staffList, setStaffList] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:3001/staff/all").then((response) => {
            setStaffList(response.data)
        });
        
    }, []);
    return(
        <div>
        
            <Navbar />
            <br/>
            
            <div>
                {staffList.map((val) => {
                    return(
                        <div style={{textAlign:"center",alignItems:"center",justifyContent:"center",boxShadow: '0 2px 5px #070300', borderRadius:'10px'}}>
                        <img src={staffImage} style={{height: '150px', width: '150px'}}/>
                        <br/>
                        <h3 style={{color:"aliceblue",fontFamily:"serif"}}>Firstname: {val.Firstname} </h3>
                        <br/>
                        <h3 style={{color:"aliceblue",fontFamily:"serif"}}>Lastname: {val.Lastname} </h3>
                        <br/>
                        <h3 style={{color:"aliceblue",fontFamily:"serif"}}>Email: {val.Email} </h3>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Staff;