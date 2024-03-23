const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
	try {
		const token = req.header("Authorization")
		const decoded = jwt.verify(token, "your_secret_key");
		req.userId = decoded.userId;
		next();
	} catch (error) {
		res
			.status(401)
			.json({ message: "Authentication failed", error: error.message });
	}
};

module.exports = authMiddleware;
