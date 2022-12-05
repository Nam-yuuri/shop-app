const express = require("express");
const router = express.Router();

const {
  createBanner,
  getAllBanner,
  getMainBanner,
  getBanner,
  updateBanner,
  deleteBanner
} = require("../controllers/bannerController");

router.post("/admin/banner/new", createBanner);
router.get("/banners", getAllBanner);
router.get("/banner/main", getMainBanner);
router.get("/admin/banner/:id", getBanner);
router.put("/admin/banner/:id", updateBanner);
router.delete("/admin/banner/:id", deleteBanner);

module.exports = router;
