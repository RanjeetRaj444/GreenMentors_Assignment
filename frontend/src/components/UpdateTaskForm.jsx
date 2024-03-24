import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	FormControl,
	FormLabel,
	Input,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../store/actions/taskActions";

export default function EditDialog({ task }) {
	const toast=useToast()
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState({
		title: task.title,
		description: task.description,
	});

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);

	function handleChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}

	function handleUpdate() {
		onClose();
		dispatch(updateTask(task._id,data, token,toast));
	}

	return (
		<>
			<Button colorScheme="yellow" onClick={onOpen}>
				Edit
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Task Details</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input
								onChange={handleChange}
								name="title"
								ref={initialRef}
								placeholder="Task Title"
								value={data.title || ""}
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Description</FormLabel>
							<Input
								onChange={handleChange}
								name="description"
								placeholder="description"
								value={data.description || ""}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button onClick={handleUpdate} colorScheme="blue" mr={3}>
							Update
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
