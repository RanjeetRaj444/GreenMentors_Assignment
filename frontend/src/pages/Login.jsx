import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import { login } from "../store/actions/authActions";

const Login = () => {
	const dispatch = useDispatch();

	const handleLogin = (formData) => {
		dispatch(login(formData));
	};

	return (
		<div>
			<div>
				<LoginForm onSubmit={handleLogin} />
			</div>
		</div>
	);
};

export default Login;
