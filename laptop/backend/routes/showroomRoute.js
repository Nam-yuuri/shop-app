const express = require("express");
const router = express.Router();

const {
  getAllShowroom,
  getCityShowroom,
  createShowroom,
  updateShowroom,
  deleteShowroom,
} = require("../controllers/showroomController");

router.get("/showroom", getAllShowroom);
router.get("/showroom/:city", getCityShowroom);
router.post("/showroom/new", createShowroom);
router.put("/showroom/:id", updateShowroom);
router.delete("/showroom/:id", deleteShowroom);

module.exports = router;
