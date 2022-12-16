const express = require("express");
const router = express.Router();

const {
  createBannerHorizontal,
  getAllBannerHorizontal,
  getMainBannerHorizon,
  updateBanner,
  deleteBanner,
  getHorizontal,
} = require("../controllers/bannerHorizontalController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// router.post("/admin/bannerHorizontal/new", createBannerHorizontal);
router
  .route("/admin/bannerHorizontal/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBannerHorizontal);
// router.get("/bannerHorizontal/", getAllBannerHorizontal);
router
  .route("/bannerHorizontal/")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllBannerHorizontal);
// router.get("/admin/bannerHorizontal/:id", getHorizontal);
router
  .route("/admin/bannerHorizontal/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getHorizontal);
// router.get("/bannerHorizontal/main", getMainBannerHorizon);
router.route("/bannerHorizontal/main").get(getMainBannerHorizon);
// router.put("/bannerHorizontal/:id", updateBanner);
// router.delete("/bannerHorizontal/:id", deleteBanner);
router
  .route("/bannerHorizontal/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBanner)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBanner);

module.exports = router;
