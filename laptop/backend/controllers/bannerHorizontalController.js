const BannerHorizontal = require("../models/bannerHorizontalModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const cloudinary = require("cloudinary");

//Create horizontal
exports.createBannerHorizontal = catchAsyncErrors(async (req, res, next) => {
  const horizontal = await BannerHorizontal.create(req.body);

  if (!horizontal) {
    return next(new ErrorHander("Không tìm thấy horizontal", 404));
  }

  try {
    res.status(200).json({
      success: true,
      horizontal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//Get all horizontal
exports.getAllBannerHorizontal = catchAsyncErrors(async (req, res, next) => {
  const horizontal = await BannerHorizontal.find();

  if (!horizontal) {
    return next(new ErrorHander("Không tìm thấy horizontal", 404));
  }

  try {
    res.status(200).json({
      success: true,
      horizontal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//Get horizontal main
exports.getMainBannerHorizon = catchAsyncErrors(async (req, res, next) => {
  const horizontal = await BannerHorizontal.find({ main: true }).limit(1);

  if (!horizontal) {
    return next(new ErrorHander("Không tìm thấy horizontal", 404));
  }

  try {
    res.status(200).json({
      success: true,
      horizontal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//update horizontal
exports.updateBanner = catchAsyncErrors(async (req, res, next) => {
  let horizontal = await BannerHorizontal.findByIdAndUpdate(req.params.id);

  if (!horizontal) {
    return next(new ErrorHander("Không tìm thấy horizontal", 404));
  }

  horizontal = await BannerHorizontal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    horizontal,
  });
});

//Delete horizontal
exports.deleteBanner = catchAsyncErrors(async (req, res, next) => {
  const horizontal = await BannerHorizontal.findByIdAndUpdate(req.params.id);

  if (!horizontal) {
    return next(new ErrorHander("Không tìm thấy horizontal", 404));
  }

  //   // Xóa ảnh ở Cloudinary
  //   for (let i = 0; i < horizontal.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(horizontal.images[i].public_id);
  //   }

  await horizontal.remove();
  res.status(200).json({
    success: true,
    message: "Xóa thành công horizontal",
  });
});
