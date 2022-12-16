const express = require("express");
const router = express.Router();

const {
  getAllShowroom,
  getCityShowroom,
  createShowroom,
  updateShowroom,
  deleteShowroom,
  getShowroom,
} = require("../controllers/showroomController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
router.get("/showroom", getAllShowroom);
router.get("/showroom/:city", getCityShowroom);
router.get(
  "/admin/showroom/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getShowroom
);
router.post(
  "/showroom/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createShowroom
);
router.put(
  "/admin/showroom/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateShowroom
);
router.delete(
  "/admin/showroom/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteShowroom
);

module.exports = router;
