const express = require("express");
const router = express.Router();

const {
  createBannerHorizontal,
  getAllBannerHorizontal,
  getMainBannerHorizon,
  updateBanner,
  deleteBanner,
  getHorizontal
} = require("../controllers/bannerHorizontalController");

router.post("/admin/bannerHorizontal/new", createBannerHorizontal);
router.get("/bannerHorizontal/", getAllBannerHorizontal);
router.get("/admin/bannerHorizontal/:id", getHorizontal);
router.get("/bannerHorizontal/main", getMainBannerHorizon);
router.put("/bannerHorizontal/:id", updateBanner);
router.delete("/bannerHorizontal/:id", deleteBanner);

module.exports = router;
