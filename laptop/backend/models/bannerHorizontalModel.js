const mongoose = require("mongoose");

const bannerHorizontalSchema = mongoose.Schema({
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
      description: {
        type: String,
        required: [true, "Hãy nhập giới thiệu"],
      },
})

module.exports = mongoose.model("BannerHorizontal", bannerHorizontalSchema)