const mongoose = require("mongoose");

const dotnetSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "MS.NET Lecture",
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
dotnetSchema.index({ day: 1 }, { unique: true });

const dotnet = mongoose.model("dotnet", dotnetSchema);
module.exports = dotnet;
