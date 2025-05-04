// Import required libraries
const express = require("express");
const dotenv = require("dotenv");

// Import files
const dbConnection = require("./config/dataBase");
const globalError = require("./middleWares/errorMiddleware");
const ApiError = require("./utils/apiError");

// usage
const app = express();
app.use(express.json());
dotenv.config({ path: "config.env" });

// Connect to MongoDB Database
dbConnection();

// Handle Errors In Express
app.use(globalError);

// Server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Handle Rejections Out Side Express
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection Errors : ${err.name} | ${err.message}`);
  server.close(() => {
    console.log(`shutting down ....`);
    process.exit(1);
  });
});
