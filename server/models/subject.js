const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.model(
  "subject",
  new Schema({
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: false,
      type: String,
    },
    section: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    key_words: [{ type: String }],
    vist: {
      required: true,
      type: Number,
      default: 0,
    },
  })
);
