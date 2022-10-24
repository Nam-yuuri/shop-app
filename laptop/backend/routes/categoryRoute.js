const express = require("express");
const {
  getAllCategories,
  getCategoryDetails,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.get("/categories", getAllCategories);

router.get("/category/:id", getCategoryDetails);

router.post(
  "/admin/category/new",
  // isAuthenticatedUser,
  // authorizeRoles("admin"),
  createCategory
);

router
  .get(
    "/admin/category/:id",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    getCategoryDetails
  )
  .put(
    "/admin/category/:id",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    updateCategory
  )
  .delete(
    "/admin/category/:id",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    deleteCategory
  );

module.exports = router;
