import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					exact
					path="/"
					element={
						<PrivateRoute>
						<Home />
						</PrivateRoute>
					}
				/>

				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
