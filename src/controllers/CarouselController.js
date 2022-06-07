const Errors = require("../constants/Errors");
const CarouselModel = require("../models/CarouselModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getCarouselData = catchAsync(async (req, res, next) => {
  const carouselData = await CarouselModel.find();
  if (!carouselData.length) {
    next(new AppError(Errors.DATA_NOT_FOUND, 404));
    return;
  }
  res.send(carouselData);
});
