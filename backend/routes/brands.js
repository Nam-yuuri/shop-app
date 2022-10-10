import express from "express";
// import { v4 as uuid4 } from "uuid";

import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/Products.js";

const router = express.Router();

router.get("/", getProducts) 

router.post("/", createProduct)

router.patch("/:id", updateProduct)

router.delete("/:id", deleteProduct)

export default router;
