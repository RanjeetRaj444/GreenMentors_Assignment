const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User registration
router.post("/register", async (req, res) => {
	try {
		const { username, password } = req.body;
		const userExists = await User.findOne({ username });
		if (userExists) {
			return res.status(400).json({ message: "Username already exists" });
		}
		const user = new User({ username, password });
		await user.save();
		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Registration failed", error: error.message });
	}
});

// User login
router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(401).json({ message: "Invalid username or password" });
		}
		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch) {
			return res.status(401).json({ message: "Invalid username or password" });
		}
		const token = jwt.sign({ userId: user._id }, "your_secret_key", {
			expiresIn: "1h",
		});
		res.status(200).json({ message: "Login successful", token, user });
	} catch (error) {
		res.status(500).json({ message: "Login failed", error: error.message });
	}
});

module.exports = router;
