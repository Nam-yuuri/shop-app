const express = require("express");
const router = express.Router();

const {
  getAllShowroom,
  getCityShowroom,
  createShowroom,
  updateShowroom,
  deleteShowroom,
  getShowroom
} = require("../controllers/showroomController");

router.get("/showroom", getAllShowroom);
router.get("/showroom/:city", getCityShowroom);
router.get("/admin/showroom/:id", getShowroom);
router.post("/showroom/new", createShowroom);
router.put("/admin/showroom/:id", updateShowroom);
router.delete("/admin/showroom/:id", deleteShowroom);

module.exports = router;
