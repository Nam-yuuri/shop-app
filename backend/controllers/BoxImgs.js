import mongoose from "mongoose";
import BoxImgBrandMessage from "../models/BoxImgs.js";

export const getBoxImgs = async (req, res) => {
  try {
    const boxImgMessage = await BoxImgBrandMessage.find();

    res.status(200).json(boxImgMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBoxImg = async (req, res) => {
  const boxImg = req.body;

  const newBoxImg = new BoxImgBrandMessage(boxImg);

  try {
    await newBoxImg.save();

    res.status(201).json(newBoxImg);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBoxImg = async (req, res) => {
  const { id: _id } = req.params;
  const boxImg = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`Không tìm thấy ảnh với id:${_id}`);
  }
  const updateBoxImg = await BoxImgBrandMessage.findByIdAndUpdate(_id, boxImg, {
    new: true,
  });
  res.json(updateBoxImg);
};

export const deleteBoxImg = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`Không tìm thấy ảnh với id:${_id}`);
  }
  await BoxImgBrandMessage.findByIdAndRemove(id);
  res.json({ message: "Xóa ảnh thành công" });
};
