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
