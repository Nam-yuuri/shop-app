const BannerHorizontal = require("../models/bannerHorizontalModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const cloudinary = require("cloudinary");

//Create horizontal
exports.createBannerHorizontal = catchAsyncErrors(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.images, {
    folder: "banner horizontal",
  });

  const { status, description } = req.body;

  const horizontal = await BannerHorizontal.create({
    status,
    description,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

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

//Get all horizontal
exports.getHorizontal = catchAsyncErrors(async (req, res, next) => {
  const horizontal = await BannerHorizontal.findById(req.params.id);

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
  const horizontal = await BannerHorizontal.find({ status: true }).limit(1);

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
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  if (!horizontal) {
    return next(new ErrorHander("Không tìm thấy horizontal", 404));
  }

  if (images !== undefined) {
    await cloudinary.v2.uploader.destroy(horizontal.images.public_id);

    const result = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: "banner horizontal",
    });
    req.body.images = result;
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
  const horizontal = await BannerHorizontal.findByIdAndDelete(req.params.id);

  if (!horizontal) {
    return next(new ErrorHander("Không tìm thấy horizontal", 404));
  }

  //   // Xóa ảnh ở Cloudinary
  await cloudinary.v2.uploader.destroy(horizontal.images.public_id);

  await horizontal.remove();
  res.status(200).json({
    success: true,
    message: "Xóa thành công horizontal",
  });
});
