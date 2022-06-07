const express = require("express");
const router = express.Router();
const { getCarouselData } = require("../controllers/CarouselController");
const { getSliderRailData } = require("../controllers/SliderRailController");
const { healthCheck } = require("../utils/helper");

router.get(`/carousel`, getCarouselData);
router.get(`/sliderRail`, getSliderRailData);
router.get(`/healthCheck`, healthCheck);

module.exports = router;
