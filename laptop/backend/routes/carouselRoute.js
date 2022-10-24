const express = require("express");
const router = express.Router();

const {
  createCarousel,
  getAllCarousel,
  getCarousel,
  updateCarousel,
  deleteCaousel,
} = require("../controllers/carouselController");

router.post("/admin/carousel/new", createCarousel);
router.get("/carousel/", getAllCarousel);
router.get("/carousel/:id", getCarousel);
router.put("/admin/carousel/:id", updateCarousel);
router.delete("/admin/carousel/:id", deleteCaousel);

module.exports = router;
