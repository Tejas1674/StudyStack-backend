const mongoose = require("mongoose");

const javaSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "Java Programming  Lecture",
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
javaSchema.index({ day: 1 }, { unique: true });

const java = mongoose.model("java", javaSchema);
module.exports = java;
