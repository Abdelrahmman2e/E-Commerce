// Import required libraries
const express = require("express");
require("dotenv").config({ path: "config.env" });
const morgan = require("morgan");

// Import files
const dbConnection = require("./config/dataBase");
const globalError = require("./middleWares/errorMiddleware");
const categoryRouter = require("./routes/Category");
const productRouter = require("./routes/Product");
const ApiError = require("./utils/apiError");

// usage
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Database
dbConnection();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);

app.all("/*splat", (req, res, nxt) => {
  return nxt(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

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
