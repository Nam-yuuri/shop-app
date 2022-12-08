const Header = require("../models/headerModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const cloudinary = require("cloudinary");

//Get all header banner
exports.getAllHeader = catchAsyncErrors(async (req, res, next) => {
  const header = await Header.find();

  res.status(200).json({
    success: true,
    header,
  });
});

//Get header banner main
exports.getMainHeader = catchAsyncErrors(async (req, res, next) => {
  const header = await Header.find({ status: true });

  if (!header) {
    return next(new ErrorHander("Không tìm thấy header banner", 404));
  }

  try {
    res.status(200).json({
      success: true,
      header,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//Get header banner details
exports.getHeader = catchAsyncErrors(async (req, res, next) => {
  const header = await Header.findById(req.params.id);

  if (!header) {
    return next(new ErrorHander("Không tìm thấy header banner", 404));
  }

  try {
    res.status(200).json({
      success: true,
      header,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//Create deader banner
exports.createHeader = catchAsyncErrors(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.images, {
    folder: "header",
  });

  const { status, description } = req.body;

  const header = await Header.create({
    status,
    description,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    header,
  });
});

//Update header
exports.updateHeader = catchAsyncErrors(async (req, res, next) => {
  let header = await Header.findByIdAndUpdate(req.params.id);
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    if (!header) {
      return next(new ErrorHander("Không tìm thấy ảnh", 404));
    }
    await cloudinary.v2.uploader.destroy(header.images.public_id);

    const result = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: "header",
    });

    req.body.images = result;
  }

  header = await Header.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    header,
  });
});

//Delete header
exports.deleteHeader = catchAsyncErrors(async (req, res, next) => {
  const header = await Header.findById(req.params.id);

  if (!header) {
    return next(new ErrorHander("Không tìm thấy ảnh", 404));
  }

  //   // Xóa ảnh ở Cloudinary
  await cloudinary.v2.uploader.destroy(header.images.public_id);

  await header.remove();

  res.status(200).json({
    success: true,
    message: "Xóa thành công header",
  });
});
