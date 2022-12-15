const express = require("express");
const router = express.Router();

const {
  createCarousel,
  getAllCarousel,
  getCarouselMain,
  getCarousel,
  updateCarousel,
  deleteCarousel,
} = require("../controllers/carouselController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.post("/admin/carousel/new", createCarousel);
// router.route("/admin/carousel/new").post(isAuthenticatedUser, createCarousel);

router.get("/carousel/", getAllCarousel);
// router.route("/carousel/").get(isAuthenticatedUser, getAllCarousel);

router.get("/carousel/main", getCarouselMain);
// router.route("/carousel/main").get(isAuthenticatedUser, getCarouselMain);

router.get("/carousel/:id", getCarousel);
// router.route("/carousel/:id").get(isAuthenticatedUser, getCarousel);

router.put("/admin/carousel/:id", updateCarousel);
// router
//   .route("/admin/carousel/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateCarousel);

router.delete("/admin/carousel/:id", deleteCarousel);
// router
//   .route("/admin/carousel/:id")
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCarousel);

module.exports = router;
