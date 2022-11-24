const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("carousel", carouselSchema);
