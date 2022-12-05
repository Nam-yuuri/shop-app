const express = require("express");
const router = express.Router();

const {
  createBrand,
  getAllBrands,
  getTopBrands,
  getBrand,
  UpdateBrand,
  DeleteBrand,
  getBrands,
  getBrandsMain
} = require("../controllers/brandController");

router.post("/admin/brand/new", createBrand);
router.get("/brand/", getAllBrands);
router.get("/brand/main", getBrandsMain);
router.get("/brand/top", getTopBrands);
router.get("/brand/:id", getBrand);
router.get("/brand/name/:name", getBrands);
router.put("/admin/brand/:id", UpdateBrand);
router.delete("/admin/brand/:id", DeleteBrand);

module.exports = router;
