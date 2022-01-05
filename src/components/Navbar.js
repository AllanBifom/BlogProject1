import React from 'react';
import '../App.css'
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink  to='/Dashboard' activeStyle>
			Dashboard
		</NavLink>
		<NavLink to='/Contact' activeStyle>
			Contact Us
		</NavLink>
		<NavLink to='/About' activeStyle>
			About
		</NavLink>
		<NavLink to='/Meetings' activeStyle>
			MeetingLinks
		</NavLink>
		<NavLink to='/Staff' activeStyle>
			Staff
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/'>LogOut</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
