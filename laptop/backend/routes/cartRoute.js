const express = require("express");
const router = express.Router();

const {
  myCart,
  getCartDetails,
  createCart,
  updateCart,
  deleteCart,
  addCartItem,
  cartDeleteItem,
} = require("../controllers/cartController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// router.route("/cart").get(isAuthenticatedUser, myCart);
router.get("/cart", myCart);

// router.route("/cart/:id").get(isAuthenticatedUser, getCartDetails);
router.get("/cart/:id", getCartDetails);

// router.route("/cart/new").post(isAuthenticatedUser, createCart);
router.post("/cart/new", createCart);

// router.route("/cart").post(isAuthenticatedUser, addCartItem);
router.post("/cart", addCartItem);

router.delete("/cart/:itemId", cartDeleteItem);
// router.delete("/cart/:itemId", isAuthenticatedUser, cartDeleteItem);

router
  .route("/cart/:id")
  .put(isAuthenticatedUser, updateCart)
  .delete(isAuthenticatedUser, deleteCart);

module.exports = router;
