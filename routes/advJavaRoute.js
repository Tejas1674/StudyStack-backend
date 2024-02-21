const { Router } = require("express");
const advjava = require("../model/advjava.js");
const { jwtAuthMiddleware } = require("../jwt.js");

const router = Router();
//for all java lecture
router.get("/", jwtAuthMiddleware, async (req, res) => {
  const AdvJava = await advjava.find();
  res.send(AdvJava);
});

//get leacture by id
router.get("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;

    const response = await advjava.findById(studentId);
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
router.post("/addadvjava", async (req, res) => {
  try {
    const { day } = req.body;
    const newdata = await advjava.findOne({ day });
    if (!newdata) {
      const data = req.body;
      const newadvjava = new advjava(data);
      const responce = await newadvjava.save();
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

    const response = await advjava.findByIdAndUpdate(
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
