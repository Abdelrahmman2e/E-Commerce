const mongoose = require("mongoose");

dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI).then((conn) => {
    console.log(`DataBase Connected: ${conn.connection.host}`);
  });
};
module.exports = dbConnection;
