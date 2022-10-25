const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getTopProducts,
  getProductsBrand,
  updateProduct,
  deleteProduct,
  getProduct
} = require("../controllers/productsController");

router.get("/product/", getAllProducts);
router.get("/product/top", getTopProducts);
router.get("/admin/product/:id", getProduct);
router.get("/product/:brand", getProductsBrand);
router.post("/product/new", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
