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
  const newPromotion = {
    title: req.body.title,
    date: req.body.date,
    status: req.body.status,
  };

  if (req.body.images !== "") {
    const promotion = await User.findById(req.promotion.id);

    const imageId = promotion.images.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: "promotion",
      width: 150,
      crop: "scale",
    });

    newUserData.images = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const promotion = await Promotion.findByIdAndUpdate(
    req.promotion.id,
    newPromotion,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    promotion,
  });
});

//Delete promotion
exports.deletePromotion = catchAsyncErrors(async (req, res, next) => {
  const promotion = await Promotion.findByIdAndDelete(req.params.id);

  await promotion.remove();
  res.status(200).json({
    success: true,
    promotion,
    message: "Xóa khuyến mãi thành công",
  });
});


