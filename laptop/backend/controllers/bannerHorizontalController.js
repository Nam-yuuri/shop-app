const BannerHorizontal = require("../models/bannerHorizontalModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const cloudinary = require("cloudinary");

//Create banner
exports.createBannerHorizontal = catchAsyncErrors(async (req, res, next) => {
  const banner = await BannerHorizontal.create(req.body);

  if (!banner) {
    return next(new ErrorHander("Không tìm thấy banner", 404));
  }

  try {
    res.status(200).json({
      success: true,
      banner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//Get all banner
exports.getAllBannerHorizontal = catchAsyncErrors(async (req, res, next) => {
  const banner = await BannerHorizontal.find();

  if (!banner) {
    return next(new ErrorHander("Không tìm thấy banner", 404));
  }

  try {
    res.status(200).json({
      success: true,
      banner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//Get banner main
exports.getMainBanner = catchAsyncErrors(async (req, res, next) => {
  const banner = await BannerHorizontal.find({ main: true }).limit(1);

  if (!banner) {
    return next(new ErrorHander("Không tìm thấy banner", 404));
  }

  try {
    res.status(200).json({
      success: true,
      banner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//update banner
exports.updateBanner = catchAsyncErrors(async (req, res, next) => {
  let banner = await BannerHorizontal.findByIdAndUpdate(req.params.id);

  if (!banner) {
    return next(new ErrorHander("Không tìm thấy banner", 404));
  }

  banner = await BannerHorizontal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    banner,
  });
});

//Delete banner
exports.deleteBanner = catchAsyncErrors(async (req, res, next) => {
  const banner = await BannerHorizontal.findByIdAndUpdate(req.params.id);

  if (!banner) {
    return next(new ErrorHander("Không tìm thấy banner", 404));
  }

  //   // Xóa ảnh ở Cloudinary
  //   for (let i = 0; i < bannerHorizontal.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(bannerHorizontal.images[i].public_id);
  //   }

  await banner.remove();
  res.status(200).json({
    success: true,
    message: "Xóa thành công banner",
  });
});
