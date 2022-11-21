const mongoose = require("mongoose");

const promotionSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
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
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Promotion", promotionSchema);
