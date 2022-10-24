const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getTopProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

router.get("/product/", getAllProducts);
router.get("/product/top", getTopProducts);
router.get("/product/:id", getProductDetails);
router.post("/product/new", createProduct);
router.get("/product/top", getTopProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
