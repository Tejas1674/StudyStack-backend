// model/User.js
const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
  prnno: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = Mongoose.model("user", UserSchema);
module.exports = User;
