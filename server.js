// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userroutes = require("./routes/UserRoute.js");
const cpproutes = require("./routes/Cpproute.js");
const javaroutes = require('./routes/JavaRoute.js')
const wptroutes= require('./routes/WptRoute.js')
const advjava= require("./routes/advJavaRoute.js")
const dotnet = require("./routes/dotnetRoute.js")
const dsa = require("./routes/dsaRoute.js")
const sdm = require("./routes/sdmRoute.js")
const data= require("./routes/databaseRoute.js")
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
//java
app.use("/api/v1/java",javaroutes)
//wpt
app.use("/api/v1/wpt",wptroutes)
//Advance java
app.use("/api/v1/advjava",advjava)
//dotnet 
app.use("/api/v1/dotnet",dotnet)
//dsa
app.use("/api/v1/dsa",dsa)
//sdm
app.use("/api/v1/sdm",sdm)
//database
app.use("/api/v1/data",data)

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

