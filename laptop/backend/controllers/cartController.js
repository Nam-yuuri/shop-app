const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create cart
exports.addCartItem = catchAsyncErrors(async (req, res, next) => {
    const { productId, quantity } = req.body;
  
    let cart = await Cart.findOne({ user: req.user._id });
    let item = await Product.findOne({ _id: productId });
  
    if (!item) {
      return next(new ErrorHander("Không tìm thấy sản phẩm", 400));
    }
  
    let discountActive = item.discountActive;
    let discountPercent = item.discountPercent;
    let price = item.price;
    let priceSale = item.price;
  
    if (discountActive) {
      priceSale = item.price - item.price * (discountPercent / 100);
    }
    const name = item.name;
    const image = item.images[0].url;
  
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