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
  const header = await Header.find({ banner: true });

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
  // let images;

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  const result = await cloudinary.v2.uploader.upload(req.body.images, {
    folder: "header",
  });

  // imagesLinks.push({
  //   public_id: result.public_id,
  //   url: result.secure_url,
  // });

  // req.body.images = imagesLinks;
  const status = req.body;

  const header = await Header.create({
    status,
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

  if (!header) {
    return next(new ErrorHander("Không tìm thấy ảnh", 404));
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
  //   for (let i = 0; i < header.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(header.images[i].public_id);
  //   }

  await header.remove();

  res.status(200).json({
    success: true,
    message: "Xóa thành công header",
  });
});
