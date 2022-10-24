const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary")
const app = require('./app')

dotenv.config();
// const app = express();

mongoose.connect(process.env.CONNECTION_URL, () => {
  console.log("connenct to mongodb");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running");
});
