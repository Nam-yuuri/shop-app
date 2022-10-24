const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
    url:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("carousel", carouselSchema)