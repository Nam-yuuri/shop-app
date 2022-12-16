const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getTopProducts,
  getProductsBrand,
  updateProduct,
  deleteProduct,
  getProduct,
  getAdminAllProducts,
  getAdminStockProducts,
} = require("../controllers/productsController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.get("/products", getAllProducts);

router.get(
  "/admin/products",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAdminAllProducts
);

router.get("/product/top", getTopProducts);

router.get(
  "/admin/product/stock",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAdminStockProducts
);

router.get("/product/:id", getProduct);

router.get("/user/product/:brand", getProductsBrand);

router.post(
  "/admin/product/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);

router.put(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);

router.delete(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

module.exports = router;
