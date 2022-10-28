const express = require("express");
const router = express.Router();

const {createProduct, deleteProduct} = require('../controllers/image')

router.post("/image/new", createProduct)
router.delete("/image/delete/:id", deleteProduct)

module.exports = router