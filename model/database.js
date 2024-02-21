const mongoose = require("mongoose");

const databaseSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "Database  Lecture",
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
databaseSchema.index({ day: 1 }, { unique: true });

const database = mongoose.model("data", databaseSchema);
module.exports = database;
