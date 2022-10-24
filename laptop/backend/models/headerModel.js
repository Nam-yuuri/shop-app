const mongoose = require("mongoose");

const headerSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  banner: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Header", headerSchema);
