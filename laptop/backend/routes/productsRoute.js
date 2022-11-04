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
} = require("../controllers/productsController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.get("/products", getAllProducts);

router.get("/admin/products", getAdminAllProducts);

router.get("/product/top", getTopProducts);

router.get("/product/:id", getProduct);

router.get("/product/:brand", getProductsBrand);

router.post("/admin/product/new", createProduct);

router.put(
  "/admin/product/:id",
  // isAuthenticatedUser,
  // authorizeRoles("admin"),
  updateProduct
);

router.delete(
  "/admin/product/:id",
  // isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

module.exports = router;
