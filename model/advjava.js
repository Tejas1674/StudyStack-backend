const mongoose = require("mongoose");

const advjavaSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "Web Programmming Using Java Lecture",
  },
  videoLink: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// Creating a unique index on the 'day' field
advjavaSchema.index({ day: 1 }, { unique: true });

const advjava = mongoose.model("advjava", advjavaSchema);
module.exports = advjava;
