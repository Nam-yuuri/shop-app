import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  to: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BrandMessage = mongoose.model("Brand", brandSchema);

export default BrandMessage;
