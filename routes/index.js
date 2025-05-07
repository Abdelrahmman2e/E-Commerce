const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const forgetPasswordRoute = require("./forgetPasswordRoute");
const categoryRoute = require("./categoryRoute");
const productRoute = require("./productRoute");
const reviewRoute = require("./reviewRoute");

const mountRoutes = (app) => {
  app.use("/api/v1/users", userRoute);
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/forgetPassword", forgetPasswordRoute);
  app.use("/api/v1/categories", categoryRoute);
  app.use("/api/v1/products", productRoute);
  app.use("/api/v1/reviews", reviewRoute);
};

module.exports = mountRoutes;
