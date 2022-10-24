const express = require("express");
const router = express.Router();
const {
  getAllHeader,
  getMainHeader,
  getHeader,
  createHeader,
  updateHeader,
  deleteHeader
} = require("../controllers/headerController");

router.get("/header/", getAllHeader)
router.get("/header/main", getMainHeader)
router.get("/header/:id", getHeader)
router.post("/header/new", createHeader)
router.put("/header/:id", updateHeader)
router.delete("/header/:id", deleteHeader)

module.exports = router