const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
  banner:{
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Banner", bannerSchema);
