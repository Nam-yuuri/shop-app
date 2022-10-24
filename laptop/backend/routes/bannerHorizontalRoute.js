const express = require("express");
const router = express.Router();

const {
  createBannerHorizontal,
  getAllBannerHorizontal,
  getMainBanner,
  updateBanner,
  deleteBanner
} = require("../controllers/bannerHorizontalController");

router.post("/admin/bannerHorizontal/new", createBannerHorizontal);
router.get("/bannerHorizontal/", getAllBannerHorizontal);
router.get("/bannerHorizontal/main", getMainBanner);
router.put("/bannerHorizontal/:id", updateBanner);
router.delete("/bannerHorizontal/:id", deleteBanner);

module.exports = router;
