const express = require("express");
const router = express.Router();
const { getCarouselData } = require("../controllers/CarouselController");
const { healthCheck } = require("../utils/helper");

router.get(`/carousel`, getCarouselData);
router.get(`/healthCheck`, healthCheck);

module.exports = router;
