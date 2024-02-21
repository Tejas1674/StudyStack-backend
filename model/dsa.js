const mongoose = require("mongoose");

const dsaSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "Data Structures and Algorithms Lecture",
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
dsaSchema.index({ day: 1 }, { unique: true });

const dsa = mongoose.model("dsa", dsaSchema);
module.exports = dsa;
