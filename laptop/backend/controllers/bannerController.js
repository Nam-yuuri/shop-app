const Banner = require("../models/bannerModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");

//Create banner
exports.createBanner = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "banners",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const banner = await Banner.create(req.body);

  res.status(200).json({
    success: true,
    banner,
  });
});

//Get all banner
exports.getAllBanner = catchAsyncErrors(async (req, res, next) => {
  const banner = await Banner.find();

  res.status(200).json({
    success: true,
    banner,
  });
});

//Get 4 banner
exports.getMainBanner = catchAsyncErrors(async (req, res, next) => {
  const banner = await Banner.find({ status: true }).limit(4);

  res.status(200).json({
    success: true,
    banner,
  });
});

//Get banner
exports.getBanner = catchAsyncErrors(async (req, res, next) => {
  const banner = await Banner.findById(req.params.id);

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

//Update banner
exports.updateBanner = catchAsyncErrors(async (req, res, next) => {
  let banner = await Banner.findByIdAndUpdate(req.params.id);
  // Xử lý Images
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  if (images !== undefined) {
    // Xóa ảnh ở Cloudinary
    for (let i = 0; i < banner.images.length; i++) {
      await cloudinary.v2.uploader.destroy(banner.images[i].public_id);
    }
    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "banners",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  banner = await Banner.findByIdAndUpdate(req.params.id, req.body, {
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
  const banner = await Banner.findByIdAndDelete(req.params.id);

  if (!banner) {
    return next(new ErrorHander("Không tìm thấy banner", 404));
  }

  // Xóa ảnh ở Cloudinary
  for (let i = 0; i < banner.images.length; i++) {
    await cloudinary.v2.uploader.destroy(banner.images[i].public_id);
  }

  await banner.remove();
  res.status(200).json({
    success: true,
    message: "Xóa thành công banner",
  });
});
