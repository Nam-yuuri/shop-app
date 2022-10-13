import express from "express";
// import { v4 as uuid4 } from "uuid";

import {
  getBoxImgs,
  createBoxImg,
  updateBoxImg,
  deleteBoxImg,
} from "../controllers/BoxImgs.js";

const router = express.Router();

router.get("/", getBoxImgs);

router.post("/", createBoxImg);

router.patch("/:id", updateBoxImg);

router.delete("/:id", deleteBoxImg);

export default router;
