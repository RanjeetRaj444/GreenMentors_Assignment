import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../store/actions/authActions";
import { useToast } from "@chakra-ui/react";
import "../Styles/LoginForms.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
	const toast = useToast();
	const [show, setShow] = useState("");
	const navigate = useNavigate();
	const [registersUser, setRegisterUser] = useState({
		username: "",
		password: "",
	});
	const [loginUser, setLoginUser] = useState({
		username: "",
		password: "",
	});

	const { registerState, loginState } = useSelector((store) => store.auth);
	console.log(registerState, loginState);
	if (registerState) {
		toast({
			title: "Account created.",
			description: "We've created your account for you.",
			status: "success",
			duration: 9000,
			isClosable: true,
		});
	}
	if (loginState) {
		toast({
			title: "Login successfully.",
			description: "You've logged successfully.",
			status: "success",
			duration: 9000,
			isClosable: true,
		});
		navigate("/");
	}
	const dispatch = useDispatch();

	const handleClick = () => {
		if (show === "active") {
			setShow("");
		} else {
			setShow("active");
		}
	};

	function handlelogin(e) {
		e.preventDefault();
		dispatch(login(loginUser));
	}
	function handleSignUp(e) {
		e.preventDefault();
		dispatch(register(registersUser));
	}
	function handleRegisterUser(e) {
		setRegisterUser({ ...registersUser, [e.target.name]: e.target.value });
	}
	function handleLoginUser(e) {
		setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
	}
	return (
		<div className={`container ${show}`} id="container">
			<div className="form-container sign-up">
				<form onSubmit={handleSignUp}>
					<h1>Create Account</h1>
					<div className="social-icons">
						<a href="# " className="icon">
							<i className="fa-brands fa-google-plus-g"></i>
						</a>
						<a href="# " className="icon">
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a href="# " className="icon">
							<i className="fa-brands fa-github"></i>
						</a>
						<a href="# " className="icon">
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</div>
					<span>or use your email for registeration</span>
					<input
						onChange={handleRegisterUser}
						type="text"
						name="username"
						placeholder="Username"
					/>
					<input
						onChange={handleRegisterUser}
						type="password"
						name="password"
						placeholder="Password"
					/>
					<button type="submit">Sign Up</button>
				</form>
			</div>
			<div className="form-container sign-in">
				<form onSubmit={handlelogin}>
					<h1>Sign In</h1>
					<div className="social-icons">
						<a href="# " className="icon">
							<i className="fa-brands fa-google-plus-g"></i>
						</a>
						<a href="# " className="icon">
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a href="# " className="icon">
							<i className="fa-brands fa-github"></i>
						</a>
						<a href="# " className="icon">
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</div>
					<span>or use your email password</span>
					<input
						onChange={handleLoginUser}
						type="text"
						name="username"
						placeholder="Username"
					/>
					<input
						onChange={handleLoginUser}
						type="password"
						name="password"
						placeholder="Password"
					/>
					<a href="# ">Forget Your Password?</a>
					<button type="submit">Sign In</button>
				</form>
			</div>
			<div className="toggle-container">
				<div className="toggle">
					<div className="toggle-panel toggle-left">
						<h1>Welcome Back!</h1>
						<p>Enter your personal details to use all of site features</p>
						<button onClick={handleClick} className="hidden" id="login">
							Sign In
						</button>
					</div>
					<div className="toggle-panel toggle-right">
						<h1>Hello, Friend!</h1>
						<p>
							Register with your personal details to use all of site features
						</p>
						<button onClick={handleClick} className="hidden" id="register">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
