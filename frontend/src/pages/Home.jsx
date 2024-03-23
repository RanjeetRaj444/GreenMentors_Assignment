import React, { useEffect } from "react";
import TaskList from "../components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/actions/taskActions";
import { Heading } from "@chakra-ui/react";
import "../Styles/Home.css";
import Navbar from "../components/Navbar";

const Home = () => {
	const dispatch = useDispatch();
	const { tasks } = useSelector((state) => state.tasks);
	const { token } = useSelector((state) => state.auth);
	useEffect(() => {
		dispatch(fetchTasks(token));
	}, []);
	return (
		<div className="main">
			<div>
				<Navbar />
			</div>
			<div className="heading">
				<Heading>Task Management</Heading>
			</div>
			<div className="task_container">
				<TaskList tasks={tasks} />
			</div>
		</div>
	);
};

export default Home;
