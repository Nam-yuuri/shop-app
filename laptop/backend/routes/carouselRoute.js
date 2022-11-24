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

router.post("/admin/carousel/new", createCarousel);
router.get("/carousel/", getAllCarousel);
router.get("/carousel/main", getCarouselMain);
router.get("/carousel/:id", getCarousel);
router.put("/admin/carousel/:id", updateCarousel);
router.delete("/admin/carousel/:id", deleteCarousel);

module.exports = router;
