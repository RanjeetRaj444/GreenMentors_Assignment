import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
	Button,
	useDisclosure,
	Heading,
	Image,
} from "@chakra-ui/react";
import React from "react";
import profile from "../assets/Profile.png";

export default function Profile({ data }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				Profile
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Profile</DrawerHeader>
					<DrawerBody style={{ textAlign: "center" }}>
						<Image src={profile} alt="img" />
						<Heading>{data.username}</Heading>
					</DrawerBody>

					<DrawerFooter>
						<Button
							variant="outline"
							colorScheme="red"
							mr={3}
							onClick={onClose}
						>
							Close
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
