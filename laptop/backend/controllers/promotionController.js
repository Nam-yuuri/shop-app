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
  let url = [];
  if (typeof req.body.url === "string") {
    url.push(req.body.url);
  } else {
    url = req.body.url;
  }
  if (url !== undefined) {
    // Xóa ảnh ở Cloudinary
    for (let i = 0; i < promotion.url.length; i++) {
      await cloudinary.v2.uploader.destroy(promotion.url[i].public_id);
    }
    const imagesLinks = [];
    for (let i = 0; i < url.length; i++) {
      const result = await cloudinary.v2.uploader.upload(url[i], {
        folder: "banners",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.url = imagesLinks;
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

// exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
//   const newUserData = {
//     name: req.body.name,
//     email: req.body.email,
//   };

//   if (req.body.avatar !== "") {
//     const user = await User.findById(req.user.id);

//     const imageId = user.avatar.public_id;

//     await cloudinary.v2.uploader.destroy(imageId);

//     const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
//       folder: "avatars",
//       width: 150,
//       crop: "scale",
//     });

//     newUserData.avatar = {
//       public_id: myCloud.public_id,
//       url: myCloud.secure_url,
//     };
//   }

//   const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

//   res.status(200).json({
//     success: true,
//   });
// });

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


