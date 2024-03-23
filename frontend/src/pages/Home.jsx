import React, { useEffect } from "react";
import TaskList from "../components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/actions/taskActions";
import { Heading } from "@chakra-ui/react";
import "../Styles/Home.css";
import Navbar from "../components/Navbar";
import { Spinner } from "@chakra-ui/react";

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
			<div className="task_container" style={{ textAlign: "center" }}>
				{tasks.length > 0 ? (
					<TaskList tasks={tasks} />
				) : (
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
