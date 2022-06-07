const { API_ENDPOINT_EXTERNAL } = require("../constants/ApiConfig");
const Errors = require("../constants/Errors");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const axios = require("axios");

exports.getSliderRailData = catchAsync(async (req, res, next) => {
  const sliderRailApiData = await axios.get(
    API_ENDPOINT_EXTERNAL.BOLLYWOOD_LIFE_FEED
  );
  const sliderRail = sliderRailApiData.data.body;
  if (!sliderRail.length) {
    next(new AppError(Errors.DATA_NOT_FOUND, 404));
    return;
  }
  res.send(sliderRail);
});
