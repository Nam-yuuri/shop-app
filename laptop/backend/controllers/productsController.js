const Product = require("../models/productsModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get All Product with Pagination
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 9;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .sorting();

  const products2 = await apiFeature.query;

  let filteredProductsCount = await products2.length;

  const apiFeature2 = new ApiFeatures(
    Product.find().populate("category"),
    req.query
  )
    .search()
    .filter()
    .sorting()
    .pagination(resultPerPage);

  const products = await apiFeature2.query;

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get Product with brand
exports.getProductsBrand = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find({brand: req.params.brand}).populate("category");

  if (!product) {
    return next(new ErrorHander("Không tìm thấy sản phẩm", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//get all product
exports.getAdminAllProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find().populate("category");

  res.status(200).json({
    success: true,
    product,
  });
});

//get top product
exports.getTopProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find().sort({ sold: -1 }).limit(5);

  res.status(200).json({
    success: true,
    product,
  });
});


//get product
exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate("category");

  if (!product) {
    return next(new ErrorHander("Không tìm thấy sản phẩm", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Create Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  //   let images = [];

  //   if (typeof req.body.images === "string") {
  //     images.push(req.body.images);
  //   } else {
  //     images = req.body.images;
  //   }

  //   const imagesLinks = [];

  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "products",
  //     });

  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }

  //   req.body.images = imagesLinks;
  //   req.body.user = req.user.id;

  const product = req.body;
  if (!product.name || !product.description) {
    return res
      .status(400)
      .json({ success: false, message: "Thiếu thông tin sản phẩm" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();

    res.status(200).json({
      success: true,
      newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Không tìm thấy sản phẩm", 404));
  }

  // Xử lý Images
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Xóa ảnh ở Cloudinary
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
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Không tìm thấy sản phẩm", 404));
  }

  // Xóa ảnh ở Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Xóa sản phẩm thành công",
  });
});
