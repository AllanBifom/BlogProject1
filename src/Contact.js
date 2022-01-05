import Navbar from "./components/Navbar";
import "./App.css"
import facebook from "./components/Images/facebookLogo.png";
import instagram from "./components/Images/instagramLogo.jpeg"
import twitter from "./components/Images/twitterLogo.png"
import youtube from "./components/Images/youTube.jpeg";
function Contact(){
    return(
        <div style={{alignItems:"center"}}>
            <Navbar />
            <p className="InnerText" style={{textAlign:"center"}}>
            To Contact us, visit the following links to see our social media pages.
            </p>
            <br/>
            <br/>
            <div style={{alignItems:"center", textAlign:"center"}}>
            <a href="https://www.facebook.com/" className="InnerText"><img src={facebook} alt="facebookLogo" style={{width: "100px", height: "100px", borderRadius: "100px", boxShadow: "0 2px 5px #070300"}}/>
            <br/> visit our facebook page
            </a>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{alignItems:"center", textAlign:"center"}}>
            <a href="https://www.instagram.com/" className="InnerText"><img src={instagram} alt="instagramLogo" style={{width: "100px", height: "100px", borderRadius: "100px", boxShadow: "0 2px 5px #070300"}}/>
            <br/> visit our instagram page
            </a>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{alignItems:"center", textAlign:"center"}}>
            <a href="https://twitter.com/" className="InnerText"><img src={twitter} alt="twitterLogo" style={{width: "100px", height: "100px", borderRadius: "100px", boxShadow: "0 2px 5px #070300"}}/>
            <br/> visit our twitter page
            </a>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{alignItems:"center", textAlign:"center"}}>
            <a href="https://youtube.com/" className="InnerText"><img src={youtube} alt="youtubeLogo" style={{width: "100px", height: "100px", borderRadius: "100px", boxShadow: "0 2px 5px #070300"}}/>
            <br/> visit our youtube page
            </a>
            </div>



        </div>
    )
}
export default Contact;