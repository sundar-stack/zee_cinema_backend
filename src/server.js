const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const app = express();

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log("mongo error", err);
  } else {
    console.log("Successfully connected to DB");
  }
});

//route setup
const router = require("./routes/routeHandler");
const { API_ENDPOINT_CONFIG } = require("./constants/ApiConfig");
const globalErrorHandler = require("./controllers/ErrorController");
app.use(API_ENDPOINT_CONFIG.BASE_END_POINT, router);

///global error handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
