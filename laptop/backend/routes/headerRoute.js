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

router.get("/header/", getAllHeader);
// router.route("/header/").get(isAuthenticatedUser, getAllHeader);

router.get("/header/main", getMainHeader);
// router.route("/header/main").get(isAuthenticatedUser, getMainHeader);

router.get("/header/:id", getHeader);
// router.route("/header/:id").get(isAuthenticatedUser, getHeader);

router.post("/header/new", createHeader);
// router.route("/header/new").post(isAuthenticatedUser, createHeader);

router.put("/header/:id", updateHeader);
// router
//   .route("/header/:id")
//   .put(isAuthenticatedUser, authorizeRoles, updateHeader);

router.delete("/header/:id", deleteHeader);
// router
//   .route("/header/:id")
//   .delete(isAuthenticatedUser, authorizeRoles, deleteHeader);

module.exports = router;
