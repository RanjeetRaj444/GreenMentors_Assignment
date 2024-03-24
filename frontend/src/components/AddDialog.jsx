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
import { addTask } from "../store/actions/taskActions";

export default function AddDialog() {
	const toast=useToast()
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState({
		title: "",
		description: "",
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
		dispatch(addTask(data, token,toast));
	}

	return (
		<>
			<Button colorScheme="green" onClick={onOpen}>
				Add
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create new Task</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input
								onChange={handleChange}
								name="title"
								ref={initialRef}
								placeholder="Task Title"
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Description</FormLabel>
							<Input
								onChange={handleChange}
								name="description"
								placeholder="description"
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button onClick={handleUpdate} colorScheme="blue" mr={3}>
							Add
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
