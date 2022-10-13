import mongoose from "mongoose";
import CarouselMessage from '../models/Carousels.js';

export const getCarousels = async (req, res) => {
    try {
        const carouselMessage = await CarouselMessage.find();

        res.status(200).json(carouselMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCarousel = async (req, res) => {
  const carousel = req.body;

  const newCarousel = new CarouselMessage(carousel);

  try {
    await newCarousel.save();

    res.status(201).json(newCarousel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateCarousel = async (req, res) => {
  const { id: _id } = req.params;
  const carousel = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`Không tìm thấy sản phẩm với id:${_id}`);
  }
  const updatedCarousel = await CarouselMessage.findByIdAndUpdate(_id, carousel, {
    new: true,
  });
  res.json(updatedCarousel);
}

export const deleteCarousel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`Không tìm thấy sản phẩm với id:${_id}`);
  }
  await CarouselMessage.findByIdAndRemove(id);
  res.json({ message: "Xóa sản phẩm thành công" });
};