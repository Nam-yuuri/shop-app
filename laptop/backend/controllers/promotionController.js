const Promotion = require("../models/promotionModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const cloudinary = require("cloudinary");

//Get all promotion
exports.getAllPromotion = catchAsyncErrors(async (req, res, next) => {
  const promotion = await Promotion.find();
  res.status(200).json({
    success: true,
    promotion,
  });
});

//Get all promotion main
exports.getMainPromotion = catchAsyncErrors(async (req, res, next) => {
  const promotion = await Promotion.find({ status: true });
  res.status(200).json({
    success: true,
    promotion,
  });
});

//Get promotion
exports.getPromotion = catchAsyncErrors(async (req, res, next) => {
  const promotion = await Promotion.findById(req.params.id);
  res.status(200).json({
    success: true,
    promotion,
  });
});

//Create promotion
exports.createPromotion = catchAsyncErrors(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.images, {
    folder: "promotion",
  });

  const { title, date, status } = req.body;

  const promotion = await Promotion.create({
    title,
    date,
    status,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    promotion,
  });
});

//Update promotion
exports.updatePromotion = catchAsyncErrors(async (req, res, next) => {
  let promotion = await Promotion.findByIdAndUpdate(req.params.id);
  // Xử lý Images
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  if (images !== undefined) {
    await cloudinary.v2.uploader.destroy(promotion.images.public_id);

    const result = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: "promotion",
    });

    req.body.images = result;
  }

  promotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    promotion,
  });
});

//Delete promotion
exports.deletePromotion = catchAsyncErrors(async (req, res, next) => {
  const promotion = await Promotion.findByIdAndDelete(req.params.id);
  await cloudinary.v2.uploader.destroy(promotion.images.public_id);
  await promotion.remove();
  res.status(200).json({
    success: true,
    promotion,
    message: "Xóa khuyến mãi thành công",
  });
});
