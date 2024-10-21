// Load environment variables from .env file
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");

// Import router
const router = require("./routes/router");

// Middleware
app.use(express.json());
app.use(cors());
app.use(router); // Ensure routes are set up correctly

// Start the server
const port = process.env.PORT || 8004; // Optionally use a port from env
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
