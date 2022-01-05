import Navbar from "./components/Navbar";
import './App.css';
import armsoutstretched from './components/Images/armsoutstretched.jpeg'
import happyFamily from './components/Images/happyFamily.jpeg'
import { width } from "dom-helpers";

function About(){
    return(
        <div>
            <Navbar />
            <div>
                <br/>
                <p className="InnerText" style={{boxShadow: "0 2px 5px #070300",width: "750px"}}>
                <img src={armsoutstretched} alt="armsoutstretched" style={{ width: "550px", borderRadius: "20px",position: "absolute", right: 50, boxShadow: "0 2px 5px #070300"}}/>
                The Allan Healing Foundation was created with the vision of helping those suffering 
                from depressiom and other personal problems. 
            
                </p> 
                <br/>
                <br/>
                <br/>
                <p className="InnerText" style={{boxShadow: "0 2px 5px #070300",width: "750px"}}>Our goal is to serve as listening ear to all our customers problems, as well as offering
                advice and therapy sessions to those who need it.</p> 
                <br/>
                <br/>
                <br/>
                <p className="InnerText" style={{boxShadow: "0 2px 5px #070300",width: "750px"}}>All our services here are free for all our members, including scheduled zoom meetings
                with our staff. which is open for everyone.
                <img src={happyFamily} alt="armsoutstretched" style={{ width: "550px", borderRadius: "20px",position: "absolute", right: 50, boxShadow: "0 2px 5px #070300"}}/>
                </p>
                <br/>
                <br/>
                <br/>
                
                <p className="InnerText" style={{boxShadow: "0 2px 5px #070300",width: "750px"}}> We provide family therapy, relationship therapy, counselling and many other services via
                a remote platform, so everyone can easily access it.
                </p>
                <br/>
                <br/>
                <br/>

                <p className="InnerText" style={{boxShadow: "0 2px 5px #070300",width: "750px"}}> Everyone is welcome here and all discussions/ Therapy sessions between members and staff are strictly
                confidential 
                </p>
                
                
            </div>
        </div>
    )
}
export default About;