const mongoose = require("mongoose");

const sdmSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "Software Development Methodology Lecture",
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
sdmSchema.index({ day: 1 }, { unique: true });

const sdm = mongoose.model("sdm", sdmSchema);
module.exports = sdm;
