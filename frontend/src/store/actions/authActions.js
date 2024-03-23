import axios from "axios";
import { REGISTRATION, USERLOGIN } from "../actionTypes";

export const register = (formData) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"https://greenmentors-assignment.onrender.com/api/auth/register",
				formData,
			);
			dispatch({ type: REGISTRATION });
			console.log(response.data); // Optionally handle success message
		} catch (error) {
			console.error("Registration failed:", error.response.data);
		}
	};
};

export const login = (formData) => {
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
			// Optionally, dispatch an action to update user state in Redux
		} catch (error) {
			console.error("Login failed:", error.response.data);
		}
	};
};
