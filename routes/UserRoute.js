const { Router } = require("express");
const { getToDo, saveToDo } = require("../Controller/UserCont.js");
const User = require("../model/User.js");

const router = Router();

router.get("/", getToDo);
router.post("/username", async (req, res) => async (req, res) => {
  try {
    const {username}= req.body
    const user = await User.findOne({ username: username });
    console.log(username)
    if (user=== undefined) {

      res.send("user not found");
    } else {
      res.send(user.username);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/save", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new Person document using the Mongoose model
    const newPerson = new User(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
