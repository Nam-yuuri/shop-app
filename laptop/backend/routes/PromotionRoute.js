const express = require("express");
const router = express.Router();

const {
  getAllPromotion,
  getPromotion,
  getMainPromotion,
  createPromotion,
  updatePromotion,
  deletePromotion,
} = require("../controllers/promotionController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.post(
  "/admin/promotion/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createPromotion
);
router.get(
  "/admin/promotion",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllPromotion
);
router.get("/promotion/main", getMainPromotion);
router.get(
  "/promotion/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getPromotion
);
router.put(
  "/admin/promotion/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updatePromotion
);
router.delete(
  "/admin/promotion/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deletePromotion
);

module.exports = router;
