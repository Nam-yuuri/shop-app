const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Hãy nhập tên thương hiệu"],
  },
  description: {
    type: String,
    required: [true, "Hãy nhập giới thiệu"],
  },
  logo: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Brand", brandSchema);
