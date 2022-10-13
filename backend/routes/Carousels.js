import express from "express";

import {
  getCarousels,
  createCarousel,
  updateCarousel,
  deleteCarousel,
} from "../controllers/Carousels.js";

const router = express.Router();

router.get("/", getCarousels);

router.post("/", createCarousel);

router.patch("/:id", updateCarousel);

router.delete("/:id", deleteCarousel);

export default router;
