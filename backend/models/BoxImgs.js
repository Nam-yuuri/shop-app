import mongoose from "mongoose";

const BoxImgSchema = mongoose.Schema({
  img: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BoxImgBrandMessage = mongoose.model("BoxImg", BoxImgSchema);

export default BoxImgBrandMessage;
