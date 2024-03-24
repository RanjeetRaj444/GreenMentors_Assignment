import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../store/actions/taskActions";
export default function DeleteAlertDialog(id) {
	const toast=useToast()
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);

	function handleDeleteTask() {
		dispatch(deleteTask(id.id, token,toast));
		onClose();
	}

	return (
		<>
			<Button colorScheme="red" onClick={onOpen}>
				Delete
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Task
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme="red" onClick={handleDeleteTask} ml={3}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}
