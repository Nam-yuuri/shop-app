const Product = require("../models/productsModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");

// Get All Product with Pagination
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 15;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .sorting();

  const products2 = await apiFeature.query;

  let filteredProductsCount = await products2.length;

  const apiFeature2 = new ApiFeatures(
    Product.find().populate("brand"),
    req.query
  )
    .search()
    .filter()
    .sorting()
    .pagination(resultPerPage);

  const product = await apiFeature2.query;

  res.status(200).json({
    success: true,
    product,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get Product with brand
exports.getProductsBrand = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 15;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find({ brand: req.params.brand }), req.query)
    .search()
    .filter()
    .sorting();

  const products2 = await apiFeature.query;

  let filteredProductsCount = await products2.length;

  const apiFeature2 = new ApiFeatures(
    Product.find({ brand: req.params.brand }).populate("brand"),
    req.query
  )
    .search()
    .filter()
    .sorting()
    .pagination(resultPerPage);

  const product = await apiFeature2.query;

  res.status(200).json({
    success: true,
    product,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

//get all product
exports.getAdminAllProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find().populate("brand");

  res.status(200).json({
    success: true,
    product,
  });
});

//get all Out of stock product
exports.getAdminStockProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find({ Stock: req.params.Stock < 6 });

  res.status(200).json({
    success: true,
    product,
  });
});

//get top product
exports.getTopProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find()
    .sort({ sold: -1 })
    .limit(10)
    .populate("brand", "name");
  const brand = req.params.brand;
  res.status(200).json({
    success: true,
    product,
    brand,
  });
});

//get product 
exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate("brand");

  if (!product) {
    return next(new ErrorHander("Kh??ng t??m th???y s???n ph???m", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Create Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  //gift
  let gift_images = [];

  if (typeof req.body.gift_images === "string") {
    gift_images.push(req.body.gift_images);
  } else {
    gift_images = req.body.gift_images;
  }

  const giftLinks = [];

  for (let i = 0; i < gift_images.length; i++) {
    const gift = await cloudinary.v2.uploader.upload(gift_images[i], {
      folder: "gift images",
    });

    giftLinks.push({
      public_id: gift.public_id,
      url: gift.secure_url,
    });
  }

  req.body.gift_images = giftLinks;

  //images
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "images products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findByIdAndUpdate(req.params.id);

  if (!product) {
    return next(new ErrorHander("Kh??ng t??m th???y s???n ph???m", 404));
  }

  // X??? l?? Images
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // X??a ???nh ??? Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  // X??? l?? Images
  let gift_images = [];

  if (typeof req.body.gift_images === "string") {
    gift_images.push(req.body.gift_images);
  } else {
    gift_images = req.body.gift_images;
  }

  if (gift_images !== undefined) {
    // X??a ???nh ??? Cloudinary
    for (let i = 0; i < product.gift_images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.gift_images[i].public_id);
    }

    const giftLinks = [];

    for (let i = 0; i < gift_images.length; i++) {
      const gift = await cloudinary.v2.uploader.upload(gift_images[i], {
        folder: "gift images",
      });

      giftLinks.push({
        public_id: gift.public_id,
        url: gift.secure_url,
      });
    }

    req.body.gift_images = giftLinks;
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new ErrorHander("Kh??ng t??m th???y s???n ph???m", 404));
  }

  // X??a ???nh ??? Cloudinary
  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }
  for (let i = 0; i < product.gift_images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.gift_images[i].public_id);
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "X??a s???n ph???m th??nh c??ng",
  });
});
