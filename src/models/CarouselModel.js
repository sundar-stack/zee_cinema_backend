const mongoose = require("mongoose");

const CarouselSchema = new mongoose.Schema({
  title: String,
  imgUrl: String,
  date: String,
});

module.exports = mongoose.model("carousel", CarouselSchema);
