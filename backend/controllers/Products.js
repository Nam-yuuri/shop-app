import mongoose from "mongoose";
import ProductMessage from "../models/Products.js";

export const getProducts = async (req, res) => {
  try {
    const productMessage = await ProductMessage.find();

    res.status(200).json(productMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new ProductMessage(product);

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`Không tìm thấy sản phẩm với id:${_id}`);
  }
  const updatedProduct = await ProductMessage.findByIdAndUpdate(_id, product, {
    new: true,
  });
  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`Không tìm thấy sản phẩm với id:${_id}`);
  }
  await ProductMessage.findByIdAndRemove(id);
  res.json({ message: "Xóa sản phẩm thành công" });
};
