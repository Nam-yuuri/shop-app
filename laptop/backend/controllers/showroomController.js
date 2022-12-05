const Showroom = require("../models/Showroom");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");

//get all showroom
exports.getAllShowroom = catchAsyncErrors(async (req, res, next) => {
  const showroom = await Showroom.find();

  res.status(200).json({
    success: true,
    showroom,
  });
});

//get showroom
exports.getShowroom = catchAsyncErrors(async (req, res, next) => {
  const showroom = await Showroom.findById(req.params.id);

  try {
    res.status(200).json({
      success: true,
      showroom,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//get all showroom with city
exports.getCityShowroom = catchAsyncErrors(async (req, res, next) => {
  const showroom = await Showroom.find({city: req.params.city});

  res.status(200).json({
    success: true,
    showroom,
  });
});

//create showroom
exports.createShowroom = catchAsyncErrors(async (req, res, next) => {
  const showroom = await Showroom.create(req.body);

  res.status(200).json({
    success: true,
    showroom,
  });
});

//update
exports.updateShowroom = catchAsyncErrors(async (req, res, next) => {
  let showroom = await Showroom.findByIdAndUpdate(req.params.id);

  if (!showroom) {
    return next(new ErrorHander("Không tìm thấy showroom", 404));
  }

  showroom = await Showroom.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    showroom,
  });
});

//delete
exports.deleteShowroom = catchAsyncErrors(async (req, res, next) => {
  const showroom = await Showroom.findByIdAndDelete(req.params.id);

  if (!showroom) {
    return next(new ErrorHander("Không tìm thấy showroom", 404));
  }

  await showroom.remove();
  res.status(200).json({
    success: true,
    message: "Xóa thành công",
  });
});
