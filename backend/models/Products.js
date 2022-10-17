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
  HSD: {
    type: Date,
    // require: true
  },
  percent: {
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
  gift_image_name: {
    type: String,
  },
  gift_image_count: {
    type: Number,
  },
  brand: {
    type: String,
    require: true,
  },
  SKU: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  Series_laptop: {
    type: String,
    require: true,
    default: "Null",
  },
  Part_number: {
    type: String,
    require: true,
    default: "Null",
  },
  Color: {
    type: String,
    require: true,
    default: "Null",
  },
  CPU_The_system: {
    type: String,
    require: true,
    default: "Null",
  },
  Monitor: {
    type: String,
    require: true,
    default: "Null",
  },
  Port_number: {
    type: String,
    require: true,
    default: "Null",
  },
  Support_slot_type: {
    type: String,
    require: true,
    default: "Null",
  },
  Output_port: {
    type: String,
    require: true,
    default: "Null",
  },
  Connector: {
    type: String,
    require: true,
    default: "Null",
  },
  Wireless_Connectivity: {
    type: String,
    require: true,
    default: "Null",
  },
  Keyboard: {
    type: String,
    require: true,
    default: "Null",
  },
  Size: {
    type: String,
    require: true,
    default: "Null",
  },
  Mass: {
    type: Number,
    default: 0,
  },
  LED: {
    type: String,
    require: true,
    default: "Null",
  },
  Accessories_included: {
    type: String,
    require: true,
    default: "Null",
  },

  CPU: {
    type: String,
    require: true,
    default: "Null",
  },
  RAM: {
    type: String,
    require: true,
    default: "Null",
  },
  Graphics: {
    type: String,
    require: true,
    default: "Null",
  },
  Storage: {
    type: String,
    require: true,
    default: "Null",
  },
  Operating_system: {
    type: String,
    require: true,
    default: "Null",
  },
  battery: {
    type: String,
    require: true,
    default: "Null",
  },
});

const ProductMessage = mongoose.model("Product", productSchema);

export default ProductMessage;
