import express from "express";
// import { v4 as uuid4 } from "uuid";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
