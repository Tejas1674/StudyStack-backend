const mongoose = require("mongoose");

const wptSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "Web  programming Technology (MERN) Lecture",
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
wptSchema.index({ day: 1 }, { unique: true });

const wpt = mongoose.model("wpt", wptSchema);
module.exports = wpt;
