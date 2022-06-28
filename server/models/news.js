const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const news = new Schema({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
});
mongoose.model("news", news);