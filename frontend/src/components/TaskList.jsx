import { Button } from "@chakra-ui/react";
import React from "react";
import "../Styles/TaskList.css";
import DeleteAlertDialog from "./DeleteDialog";
import EditDialog from "./UpdateTaskForm";

const TaskList = ({ tasks }) => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task) => (
						<tr key={task._id}>
							<td data-label="Title" style={{ fontWeight: "bold" }}>{task.title}</td>
							<td data-label="Description">{task.description}</td>
							<td>
								<EditDialog task={task}/>
							</td>
							<td>
								<DeleteAlertDialog id={task._id}/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TaskList;
