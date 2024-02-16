// server.js
const express = require("express");
const mongoose = require("mongoose");
const userroutes = require("./routes/UserRoute.js");
const cpproutes= require("./routes/Cpproute.js")
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const URL =
  "mongodb+srv://Tejas_2001:Tejas_2001@cluster0.yh6oemv.mongodb.net/LMS?retryWrites=true&w=majority";
mongoose
  .connect(URL)
  .then(() => console.log(`Connected to mongob..`))
  .catch((err) => console.log(err));

  //user routes
app.use("/api/v1/user", userroutes);

//cpp routes
app.use("/api/v1/cpp",cpproutes)
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server Run on ${PORT}`);
});
