const express = require("express");
const router = express.Router();
const {
  getAllHeader,
  getMainHeader,
  getHeader,
  createHeader,
  updateHeader,
  deleteHeader,
} = require("../controllers/headerController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// router.get("/header/", getAllHeader);
router
  .route("/header/")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllHeader);

// router.get("/header/main", getMainHeader);
router.route("/header/main").get(getMainHeader);

// router.get("/header/:id", getHeader);
router
  .route("/header/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getHeader);

// router.post("/header/new", createHeader);
router
  .route("/header/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createHeader);

// router.put("/header/:id", updateHeader);
router
  .route("/header/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateHeader);

// router.delete("/header/:id", deleteHeader);
router
  .route("/header/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteHeader);

module.exports = router;
