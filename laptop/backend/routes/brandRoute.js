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
  getBrandsMain,
} = require("../controllers/brandController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// router.post("/admin/brand/new", createBrand);
router
  .route("/admin/brand/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBrand);

// router.get("/brand/", getAllBrands);
router.route("/brand/").get(getAllBrands);

// router.get("/brand/main", getBrandsMain);
router.route("/brand/main").get(getBrandsMain);

// router.get("/brand/top", getTopBrands);
router.route("/brand/top").get(getTopBrands);

// router.get("/brand/:id", getBrand);
router.route("/brand/:id").get(getBrand);

// router.get("/brand/name/:name", getBrands);
router.route("/brand/name/:name").get(getBrands);

// router.put("/admin/brand/:id", UpdateBrand);
router
  .route("/admin/brand/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), UpdateBrand);

// router.delete("/admin/brand/:id", DeleteBrand);
router
  .route("/admin/brand/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), DeleteBrand);

module.exports = router;
