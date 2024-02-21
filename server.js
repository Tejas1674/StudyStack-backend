// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userroutes = require("./routes/UserRoute.js");
const cpproutes = require("./routes/Cpproute.js");

const app = express();
const cors = require("cors");

// app Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// All main routes
//main routes
app.get("/", (req, res) => {
	// throw new Error("Fake Error generated for testing purpose");
	res.send("Hello Node API Learning");
});

//user routes
app.use("/api/v1/user", userroutes);

//cpp routes
app.use("/api/v1/cpp", cpproutes);

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT_NUM || 4000;
mongoose
	.connect(MONGO_URL)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server Run on ${PORT}`);
		});
		console.log(`Connected to mongob..`);
	})
	.catch((err) => console.log(err));

