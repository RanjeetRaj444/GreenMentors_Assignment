import axios from "axios";
import { REGISTRATION, USERLOGIN } from "../actionTypes";

export const register = (formData, toast) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"https://greenmentors-assignment.onrender.com/api/auth/register",
				formData,
			);
			dispatch({ type: REGISTRATION });
			console.log(response.data); // Optionally handle success message
			toast({
				title: "Account created.",
				description: "We've created your account for you.",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Registration faild.",
				description: error.response.data.message,
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			console.error("Registration failed:", error.response.data);
		}
	};
};

export const login = (formData, toast, navigate) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"https://greenmentors-assignment.onrender.com/api/auth/login",
				formData,
			);
			console.log(response.data); // Optionally handle success message
			dispatch({
				type: USERLOGIN,
				payload: { user: response.data.user, token: response.data.token },
			});
			if (response.data.token) {
				toast({
					title: "Login successfully.",
					description: "You've logged successfully.",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
				navigate("/");
			} else {
				toast({
					title: "Login faild.",
					description: "Username or Password is wrong try again.",
					status: "error",
					duration: 9000,
					isClosable: true,
				});
			}
			// Optionally, dispatch an action to update user state in Redux
		} catch (error) {
			toast({
				title: "Login faild.",
				description: error.response.data.message,
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			console.error("Login failed:", error.response.data);
		}
	};
};
