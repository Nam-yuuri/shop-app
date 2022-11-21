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

router.post("/admin/promotion/new", createPromotion);
router.get("/admin/promotion", getAllPromotion);
router.get("/promotion/main", getMainPromotion);
router.get("/promotion/:id", getPromotion);
router.put("/admin/promotion/:id", updatePromotion);
router.delete("/admin/promotion/:id", deletePromotion);

module.exports = router;
