const Cart = require("../models/cartModel");
const Product = require("../models/productsModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get Cart Details
exports.getCartDetails = catchAsyncErrors(async (req, res, next) => {
  const cart = await Category.findById(req.params.id);

  if (!cart) {
    return next(new ErrorHander("Không tìm thấy giỏ hàng", 404));
  }

  res.status(200).json({
    success: true,
    cart,
  });
});

//Get my cart
exports.myCart = catchAsyncErrors(async (req, res, next) => {
  // const { userId } = req.body;
  // console.log("userId2222: ", req.user._id)
  const cart = await Cart.findOne({ user: req.user._id }).populate({
    path: "cartItems.product",
    model: "Product",
  });

  // let cartItems = await cart.cartItems;

  res.status(200).json({
    success: true,
    cart,
    // cartItems,
  });
});

// Add cart item --  User
exports.addCartItem = catchAsyncErrors(async (req, res, next) => {
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });
  let item = await Product.findOne({ _id: productId });

  // console.log("item: ", item);
  // console.log("req.user.user._id: ", req.user._id);
  // console.log("userId: ", (req.user._id).toString());
  // console.log("userId1: ", userId);
  // console.log("userId2222: ", req.user)

  if (!item) {
    return next(new ErrorHander("Không tìm thấy sản phẩm", 400));
  }

  let discountActive = item.Status_promotional;
  let discountPercent = item.promotional;
  let price = item.cost;
  let priceSale = item.cost;
  // .toFixed(2)
  // Number(Math.round(totalAmount + 'e' + 2) + 'e-' + 2)
  if (discountActive) {
    priceSale =
      item.cost -
      Math.floor((((item.cost / 1000000) * discountPercent) / 100).toFixed(0)) *
        1000000;
    // priceSale = Number(Math.round((item.cost / 1000000 - (item.cost / 1000000 * (discountPercent / 100)).toFixed(2) * 1000000)));
  }
  const name = item.name;
  const image = item.images[0].url;
  const gift_name = item.gift_image_name;
  const gift_image = item.gift_images[0].url;

  if (cart) {
    // Nếu user đã có giỏ hàng
    let itemIndex = cart.cartItems.findIndex((p) => p.product == productId);

    // Kiểm tra xem sản phẩm đã tồn tại hay chưa
    if (itemIndex > -1) {
      let productItem = cart.cartItems[itemIndex];
      productItem.quantity += quantity;
      if (productItem.quantity > item.Stock) {
        return next(
          new ErrorHander("Số lượng sản phẩm còn lại trong kho không đủ", 400)
        );
      }
      cart.cartItems[itemIndex] = productItem;
    } else {
      cart.cartItems.push({
        product: productId,
        name,
        quantity,
        price,
        image,
        discountActive,
        discountPercent,
        priceSale,
        gift_name,
        gift_image,
      });
    }
    cart.totalPrice += quantity * priceSale;
    cart = await cart.save();
    let cartItems = await cart.cartItems;
    res.status(201).json({
      success: true,
      cart,
      cartItems,
    });
  } else {
    // Nếu không tồn tại cart tạo mới.
    const newCart = await Cart.create({
      user: req.user._id,
      cartItems: [
        {
          product: productId,
          name,
          quantity,
          price,
          image,
          discountActive,
          discountPercent,
          priceSale,
          gift_name,
          gift_image,
        },
      ],
      totalPrice: quantity * priceSale,
    });
    let cartItems = await newCart.cartItems;
    res.status(201).json({
      success: true,
      newCart,
      cartItems,
    });
  }
});

// Delete cart Item -- user
exports.cartDeleteItem = catchAsyncErrors(async (req, res, next) => {
  const productId = req.params.itemId;

  let cart = await Cart.findOne({ user: req.user._id });
  let item = await Product.findOne({ _id: productId });

  let discountActive = item.discountActive;
  let discountPercent = item.discountPercent;
  let price = item.price;
  let priceSale = item.price;

  if (discountActive) {
    priceSale = item.price - item.price * (discountPercent / 100);
  }

  let itemIndex = cart.cartItems.findIndex((p) => p.product == productId);

  if (itemIndex > -1) {
    let productItem = cart.cartItems[itemIndex];
    // cart.totalPrice -= quantity * priceSale;
    if (productItem.discountActive) {
      priceSale =
        productItem.price -
        productItem.price * (productItem.discountPercent / 100);
    }
    cart.totalPrice -= productItem.quantity * priceSale;
    cart.cartItems.splice(itemIndex, 1);
  }

  cart = await cart.save();

  res.status(201).json({
    success: true,
    cart,
  });
});

// Create Cart --  User
exports.createCart = catchAsyncErrors(async (req, res, next) => {
  const { cartItems, totalPrice } = req.body;

  const cart = await Cart.create({
    cartItems,
    totalPrice,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    cart,
  });
});

// Update Cart -- User
exports.updateCart = catchAsyncErrors(async (req, res, next) => {
  let cart = await Cart.find({ user: req.user.id });

  if (!cart) {
    return next(new ErrorHander("Không tìm thấy cart", 404));
  }

  cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    cart,
  });
});

// Delete Cart
exports.deleteCart = catchAsyncErrors(async (req, res, next) => {
  const cart = await Cart.findById(req.params.id);

  if (!cart) {
    return next(new ErrorHander("Không tìm thấy giỏ hàng", 404));
  }

  await cart.remove();

  res.status(200).json({
    success: true,
    message: "Xóa thành công giỏ hàng",
  });
});
