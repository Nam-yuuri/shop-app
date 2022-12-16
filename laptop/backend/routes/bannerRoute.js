const express = require("express");
const router = express.Router();

const {
  createBanner,
  getAllBanner,
  getMainBanner,
  getBanner,
  updateBanner,
  deleteBanner,
} = require("../controllers/bannerController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// router.post("/admin/banner/new", createBanner);
router
  .route("/admin/banner/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBanner);

// router.get("/banners", getAllBanner);
router
  .route("/banners")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllBanner);

// router.get("/banner/main", getMainBanner);
router.route("/banner/main").get(getMainBanner);

// router.get("/admin/banner/:id", getBanner);
router
  .route("/admin/banner/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getBanner);

// router.put("/admin/banner/:id", updateBanner);
router
  .route("/admin/banner/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBanner);

// router.delete("/admin/banner/:id", deleteBanner);
router
  .route("/admin/banner/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBanner);

module.exports = router;
