const Carousel = require("../models/carouselModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");

//Create carousel
exports.createCarousel = catchAsyncErrors(async (req, res, next) => {

  const result = await cloudinary.v2.uploader.upload(req.body.images, {
    folder: "carousel",
  });

  const { description,status } = req.body;

  const carousel = await Carousel.create({
    description,
    status,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    carousel,
  });
});

//Get all carousels
exports.getAllCarousel = catchAsyncErrors(async (req, res, next) => {
  const carousel = await Carousel.find();

  res.status(200).json({
    success: true,
    carousel,
  });
});

//Get carousel
exports.getCarousel = catchAsyncErrors(async (req, res, next) => {
  const carousel = await Carousel.findById(req.params.id);

  res.status(200).json({
    success: true,
    carousel,
  });
});

//Get carousel main
exports.getCarouselMain = catchAsyncErrors(async (req, res, next) => {
  const carousel = await Carousel.find({status: true});

  res.status(200).json({
    success: true,
    carousel,
  });
});

//Update carousel
exports.updateCarousel = catchAsyncErrors(async (req, res, next) => {
  let carousel = await Carousel.findByIdAndUpdate(req.params.id);

  if (!carousel) {
    return next(new ErrorHander("Không tìm thấy carousel", 404));
  }
  carousel = await Carousel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    carousel,
  });
});

//Delete carousel
exports.deleteCarousel = catchAsyncErrors(async (req, res, next) => {
  let carousel = await Carousel.findByIdAndUpdate(req.params.id);

  if (!carousel) {
    return next(new ErrorHander("Không tìm thấy carousel", 404));
  }

    // Xóa ảnh ở Cloudinary
    for (let i = 0; i < carousel.images.length; i++) {
      await cloudinary.v2.uploader.destroy(carousel.images[i].public_id);
    }

  await carousel.remove();
  res.status(200).json({
    success: true,
    message: "Xóa thành công carousel",
  });
});
