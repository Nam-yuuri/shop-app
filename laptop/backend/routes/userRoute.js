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

router.post("/user/register", registerUser);

router.post("/user/login", loginUser);

router.get("/user/logout", logout);

router.post("/user/password/forgot", forgotPassword);

router.put("/user/password/reset/:token", resetPassword);

router.get("/user/me", isAuthenticatedUser, getUserDetails);

router.put("/user/password/update", isAuthenticatedUser, updatePassword);

router.put("/user/ship/update", isAuthenticatedUser, updateShippingInfo);

router.put("/user/me/update", isAuthenticatedUser, updateProfile);

router.put("/user/shippingInfo/update", isAuthenticatedUser, updateShippingInfo);

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
