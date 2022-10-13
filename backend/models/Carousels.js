import mongoose from "mongoose";

const carouselSchema = mongoose.Schema({
  img: {
    type: String,
    require: true,
  },
  alt: {
    type: String,
    default: 'Image Error'
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CarouselMessage = mongoose.model("Carousel", carouselSchema);

export default CarouselMessage;