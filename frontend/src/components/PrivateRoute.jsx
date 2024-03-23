import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heading, Text } from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	const isAuthenticated = useSelector((state) => state.auth.loginState);
	if (isAuthenticated) {
		return children;
	} else {
		setTimeout(() => {
			navigate("/login");
		}, 700);

		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Heading>Sorry</Heading>
				<Text style={{ fontSize: "2rem", font: "-moz-initial" }}>
					You are not Authenticate😥.
				</Text>
				<Text style={{ fontSize: "2rem", font: "-moz-initial" }}>
					You will be redirected to the login page in.
				</Text>
			</div>
		);
	}
};

export default PrivateRoute;
