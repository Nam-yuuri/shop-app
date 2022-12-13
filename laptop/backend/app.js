const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");


const errorMiddleware = require("./middleware/error");

// Config
require("dotenv").config({ path: "config/config.env" });

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload());
app.use(cors());

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Route Imports
const productRoute = require("./routes/productsRoute");
const headerRoute = require("./routes/headerRoute");
const brandRoute = require("./routes/brandRoute");
const carouselRoute = require("./routes/carouselRoute");
const bannerRoute = require("./routes/bannerRoute");
const HorizontalRoute = require("./routes/bannerHorizontalRoute");
// const imageRoute = require("./routes/image");
const promotionRoute = require("./routes/PromotionRoute")
const showroomRoute = require("./routes/showroomRoute")
const userRoute = require("./routes/userRoute")
const cartRoute = require("./routes/cartRoute")

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", headerRoute);
app.use("/api/v1", brandRoute);
app.use("/api/v1", carouselRoute);
app.use("/api/v1", bannerRoute);
app.use("/api/v1", HorizontalRoute);
app.use("/api/v1", promotionRoute);
app.use("/api/v1", showroomRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", cartRoute);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
