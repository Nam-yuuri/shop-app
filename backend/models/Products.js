import mongoose from "mongoose";

const productSchema = mongoose.Schema({
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
  promotion_money: {
    type: String,
    require: true,
  },
  info: {
    type: String,
    require: true,
  },
  cost: {
    type: String,
    require: true,
  },
  promotional_price: {
    type: String,
    // require: true
  },
  percent: {
    type: String,
    // require: true
  },
  gift_image: {
    type: String,
  },
  brand: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ProductMessage = mongoose.model("Product", productSchema);

export default ProductMessage;
