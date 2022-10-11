import mongoose from "mongoose";
import BrandMessage from "../models/brands.js";

export const getBrands = async (req, res) => {
  try {
    const brandMessage = await BrandMessage.find();

    res.status(200).json(brandMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBrand = async (req, res) => {
  const brand = req.body;

  const newBrand = new BrandMessage(brand);

  try {
    await newBrand.save();

    res.status(201).json(newBrand);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBrand = async (req, res) => {
  const { id: _id } = req.params;
  const brand = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`Không tìm thấy sản phẩm với id:${_id}`);
  }
  const updatedBrand = await BrandMessage.findByIdAndUpdate(_id, brand, {
    new: true,
  });
  res.json(updatedBrand);
};

export const deleteBrand = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`Không tìm thấy sản phẩm với id:${_id}`);
  }
  await BrandMessage.findByIdAndRemove(id);
  res.json({ message: "Xóa sản phẩm thành công" });
};
