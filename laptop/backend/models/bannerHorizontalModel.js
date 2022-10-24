const mongoose = require("mongoose");

const bannerHorizontalSchema = mongoose.Schema({
    url:{
        type: String,
        require:true
    },
    main:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("BannerHorizontal", bannerHorizontalSchema)