const { Router } = require("express");
const Cpp = require("../model/Cpp.js");
const { getcpp } = require("../Controller/CppContoller.js");
const {jwtAuthMiddleware} = require('../jwt.js')

const router = Router();
//for all cpp lecture
router.get("/",jwtAuthMiddleware, getcpp);

//get leacture by id
router.get("/:id", async (req, res) => {
  try {
    // Extract the studentId from the request parameters
    const studentId = req.params.id;
    //console.log(studentId);

    // Attempt to find a Cpp document by its id using a model (presumably mongoose)
    const response = await Cpp.findById(studentId);

    // Check if a response was found
    if (!response) {
      // If not found, return a 400 status with an error message
      return res.status(400).json({ error: "Cpp Not Found" });
    }

    // If found, return a 200 status with the response (presumably the Cpp document)
    res.status(200).json(response);
  } catch (err) {
    // Handle any errors that occur during the execution
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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
      return res.status(400).json({ error: "Cpp Not Found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }

});
//for  delete the leacture by id

module.exports = router;
