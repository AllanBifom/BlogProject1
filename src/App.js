
import './App.css';
import styled from 'styled-components';
import happyFamily from './components/Images/happyFamily.jpeg'
import oldguysmilling from './components/Images/oldguysmilling.jpeg'
import HoldingHandsimg from './components/Images/HoldingHandsimg.jpeg'
import {Routes as Switch, Route, NavLink } from 'react-router-dom';
import { render } from "react-dom";
import Login from './Login';
import  Carousel  from "react-elastic-carousel";
import HappyHeart from "./components/Images/Happy-Heart.jpeg"

function App() {
  const Div = styled.div`
    background-color: beige;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 0px 0px;
    cursor: pointer;
    font-family: Zapfino;
    `;
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]
  return (

    <div className="App">
      <div className="App-header">
        <div className="RegistrationPage" style={{borderRadius: "10px", height: "750px"}}>
            <div className="Text">
                Welcome To Allans Healing Foundation
                <div className="InnerText">
                    Join our community
                </div>
            </div>
            <Carousel breakPoints={breakPoints} style={{backgroundcolor: "#282c34"}}>
            <div>
            <img src={happyFamily} alt="HappyFamily" className="IMG1"/>
            </div>
            <div>
            <img src={oldguysmilling} alt="oldguysmilling" className="IMG1"/>
            </div>
            <div>
            <img src={HoldingHandsimg} alt="HoldingHandsimg" className="IMG1"/>
            </div>
            <div>
              <img src={HappyHeart} alt="HappyHeart" className="IMG1" />
            </div>
        </Carousel>
            <Div>
            <NavLink activeClassName="active" to="/login">SignIn</NavLink>
            </Div>
            <Div>
              <NavLink activeClassName="active" to="/signUp">SignUp</NavLink> 
              </Div>
            <form>

            </form>

      </div>
    </div>
    <Switch>
              
    <Route path="/login" component={Login} />
              
    </Switch>
    
    </div>
  );
}

export default App;
