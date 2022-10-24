const express = require("express");
const router = express.Router();

const {
  createBrand,
  getAllBrands,
  getTopBrands,
  getBrand,
  UpdateBrand,
  DeleteBrand
} = require("../controllers/brandController");

router.post("/admin/brand/new", createBrand);
router.get("/brand/", getAllBrands);
router.get("/brand/top", getTopBrands);
router.get("/brand/:id", getBrand);
router.put("/admin/brand/:id", UpdateBrand);
router.delete("/admin/brand/:id", DeleteBrand);

module.exports = router;
