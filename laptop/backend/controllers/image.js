const Image = require("../models/image");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (req.body.images.string) {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i].url, {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const product = await Image.create(req.body)

  res.status(200).json({
    success: true,
    product,
  });
});


exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Image.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Không tìm thấy sản phẩm", 404));
    }
  
    //Xóa ảnh ở Cloudinary
    for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].public_id);
      }
  
    await product.remove();
  
    res.status(200).json({
      success: true,
      message: "Xóa sản phẩm thành công",
    });
  });