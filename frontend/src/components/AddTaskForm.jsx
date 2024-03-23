import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddTaskForm = ({ onSubmit }) => {
	const initialValues = {
		title: "",
		description: "",
	};

	const validationSchema = Yup.object({
		title: Yup.string().required("Title is required"),
		description: Yup.string().required("Description is required"),
	});

	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	};

	return (
		<div>
			<h2>Add Task</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div>
						<label>Title:</label>
						<Field type="text" name="title" />
						<ErrorMessage name="title" component="div" />
					</div>
					<div>
						<label>Description:</label>
						<Field type="text" name="description" />
						<ErrorMessage name="description" component="div" />
					</div>
					<button type="submit">Add Task</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AddTaskForm;
