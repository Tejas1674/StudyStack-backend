const { Router } = require("express");
const Cpp = require("../model/Cpp.js");
const { getcpp } = require("../Controller/CppContoller.js");

const router = Router();
//for all cpp lecture
router.get("/", getcpp);

//for save new lecture
router.post("/addcpp", async (req, res) => {
	try {
		const { day } = req.body;
		const newdata = await Cpp.findOne({ day });
		if (!newdata) {
			const data = req.body;
			const newcpp = new Cpp(data);
			const responce = await newcpp.save();
			res.status(200).json(responce);
		} else {
			res.status(400).json("This Day is already exist!");
		}
	} catch (error) {
		console.log(err);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

//for update  the lecture by day
// <<<<<<< main
// router.put("/cpp/update/:day", async (req, res) => {
// 	try {
// 		const updatedCpp = await Cpp.findOneAndUpdate(
// 			{ day: req.params.day },
// 			{
// 				$set: {
// 					day: req.body.day,
// 					time: req.body.time,
// 					Description: req.body.Description,
// 					videoLink: req.body.videoLink,
// 					title: req.body.title,
// 				},
// 			},
// 			{ new: true }
// 		);

// 		res.json(updatedCpp);
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// =======
router.put("/update/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedStudentData = req.body;

    const response = await Cpp.findByIdAndUpdate(
      studentId,
      updatedStudentData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(400).json({ error: "Student Not Found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
// >>>>>>> main
});
//for  delete the lecture by id

module.exports = router;
