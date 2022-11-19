const Brand = require("../models/brandModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");

//Create brand
exports.createBrand = catchAsyncErrors(async (req, res, next) => {
  // image
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "brand-images",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  // //logo
  // let logo = [];

  // if (typeof req.body.logo === "string") {
  //   logo.push(req.body.logo);
  // } else {
  //   logo = req.body.logo;
  // }

  // const logoLinks = [];

  // for (let i = 0; i < logo.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(logo[i], {
  //     folder: "brand-logo",
  //   });

  //   logoLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }

  // req.body.logo = logoLinks;

  const brand = req.body;
  if (!brand.name) {
    return res.status(400).json({
      success: false,
      message: "Chưa có tên thương hiệu",
    });
  }

  const newBrand = await Brand.create(req.body);

  res.status(200).json({
    success: true,
    newBrand,
  });
});

//Get all brands
exports.getAllBrands = catchAsyncErrors(async (req, res, next) => {
  const brand = await Brand.find();

  res.status(200).json({
    success: true,
    brand,
  });
});

//Get top brands
exports.getTopBrands = catchAsyncErrors(async (req, res, next) => {
  const brand = await Brand.find().sort({ sold: -1 }).limit(5);

  res.status(200).json({
    success: true,
    brand,
  });
});

//Get brand
exports.getBrand = catchAsyncErrors(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);

  if (!brand) {
    return next(new ErrorHander("Không tìm thấy brand", 404));
  }

  res.status(200).json({
    success: true,
    brand,
  });
});

//Update brand
exports.UpdateBrand = catchAsyncErrors(async (req, res, next) => {
  let brand = await Brand.findByIdAndUpdate(req.params.id);

  if (!brand) {
    return next(new ErrorHander("Không tìm thấy brand", 404));
  }

  brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    brand,
  });
});

//Delete brand
exports.DeleteBrand = catchAsyncErrors(async (req, res, next) => {
  let brand = await Brand.findById(req.params.id);

  if (!brand) {
    return next(new ErrorHander("Không tìm thấy brand", 404));
  }

  //   // Xóa ảnh ở Cloudinary
  //   for (let i = 0; i < brand.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(brand.images[i].public_id);
  //   }

  await brand.remove();
  res.status(200).json({
    success: true,
    message: "Xóa thành công brand",
  });
});
