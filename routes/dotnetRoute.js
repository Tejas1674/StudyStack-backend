const { Router } = require("express");
const dotnet = require("../model/dotnet.js");
const { jwtAuthMiddleware } = require("../jwt.js");

const router = Router();
//for all java lecture
router.get("/", jwtAuthMiddleware, async (req, res) => {
  const Dotnet = await dotnet.find();
  res.send(Dotnet);
});

//get leacture by id
router.get("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;

    const response = await dotnet.findById(studentId);
    if (!response) {
      return res.status(400).json({ error: "java Not Found" });
    }

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//for save new lecture
router.post("/adddotnet", async (req, res) => {
  try {
    const { day } = req.body;
    const newdata = await dotnet.findOne({ day });
    if (!newdata) {
      const data = req.body;
      const newadvdotnet = new dotnet(data);
      const responce = await newadvdotnet.save();
      res.status(200).json(responce);
    } else {
      res.status(400).json("This Day is already exist!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//for update  the lecture by day

router.put("/update/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedStudentData = req.body;

    const response = await dotnet.findByIdAndUpdate(
      studentId,
      updatedStudentData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(400).json({ error: "wpt Not Found" });
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
