const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const tasksRoute = require("./routes/task.js");
const authRoute = require("./routes/auth.js");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/tasks", authMiddleware, tasksRoute); // Protect tasks routes with JWT middleware
app.use("/api/auth", authRoute);

// MongoDB connection
mongoose
	.connect(process.env.mongodb_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Error connecting to MongoDB:", err));

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
