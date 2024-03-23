import React from "react";
import "../Styles/Navbar.css";
import { Button } from "@chakra-ui/button";
import AddDialog from "./AddDialog";
import { useSelector } from "react-redux";
import Profile from "./Profile";
const Navbar = () => {
	const { user } = useSelector((store) => store.auth);
	return (
		<div className="navbar">
			<div className="navbar-left">
				<span className="navbar-title">Task Management Application</span>
			</div>
			<div className="navbar-right">
				<AddDialog />
				<Profile data={user} />
			</div>
		</div>
	);
};

export default Navbar;
