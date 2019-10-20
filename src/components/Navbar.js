import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<ul className="navbar">
				<li>Logo or Link here</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>About</li>
				<li>
					<Link to="/sign-in">Sign in/Sign Up</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
