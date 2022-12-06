const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  updateUserRole,
  deleteUser,
  getSingleUser,
  updateShippingInfo,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logout);

router.post("/password/forgot", forgotPassword);

router.put("/password/reset/:token", resetPassword);

// router.get("/me", isAuthenticatedUser, getUserDetails);
router.get("/me", getUserDetails);

router.put("/password/update", isAuthenticatedUser, updatePassword);

router.put("/ship/update", isAuthenticatedUser, updateShippingInfo);

router.put("/me/update", isAuthenticatedUser, updateProfile);

router.put("/shippingInfo/update", isAuthenticatedUser, updateShippingInfo);

router.get(
  "/admin/users",
  // isAuthenticatedUser,
  // authorizeRoles("admin"),
  getAllUser
);

router
  .get(
    "/admin/user/:id",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    getSingleUser
  )
  .put(
    "/admin/user/:id",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    updateUserRole
  )
  .delete(
    "/admin/user/:id",
    // isAuthenticatedUser,
    // authorizeRoles("admin"),
    deleteUser
  );

module.exports = router;
