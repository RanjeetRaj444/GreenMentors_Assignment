import axios from "axios";
import { ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from "../actionTypes";

export const fetchTasks = (token) => {
	return async (dispatch) => {
		try {
			const response = await axios.get("https://greenmentors-assignment.onrender.com/api/tasks", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			});
			console.log(response.data);
			dispatch({ type: GET_TASKS, payload: response.data });
		} catch (error) {
			console.error("Failed to fetch tasks:", error);
		}
	};
};

export const addTask = (formData, token) => {
	console.log(formData, token);
	const config = {
		headers: {
			Authorization: `${token}`,
			"Content-Type": "application/json", // Assuming JSON data is being sent
		},
	};
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"https://greenmentors-assignment.onrender.com/api/tasks",
				formData,
				config,
			);
			dispatch({ type: ADD_TASK });
			dispatch(fetchTasks(token));
			console.log(response);
		} catch (error) {
			console.error("Failed to add task:", error);
		}
	};
};
export const updateTask = (id, data, token) => {
	const config = {
		headers: {
			Authorization: `${token}`,
			"Content-Type": "application/json", // Assuming JSON data is being sent
		},
	};
	return async (dispatch) => {
		try {
			const response = await axios.patch(
				`https://greenmentors-assignment.onrender.com/api/tasks/${id}`,
				data,
				config,
			);
			dispatch(fetchTasks(token));
			console.log(response);
		} catch (error) {
			console.error("Failed to update task:", error);
		}
	};
};
export const deleteTask = (id, token) => {
	const config = {
		headers: {
			Authorization: `${token}`,
			"Content-Type": "application/json", // Assuming JSON data is being sent
		},
	};
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`https://greenmentors-assignment.onrender.com/api/tasks/${id}`,
				config,
			);
			dispatch(fetchTasks(token));
			console.log(response);
		} catch (error) {
			console.error("Failed to delete task:", error);
		}
	};
};
