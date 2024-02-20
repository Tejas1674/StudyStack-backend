const { Router } = require("express");
const { getToDo, saveToDo } = require("../Controller/UserCont.js");
const User = require("../model/User.js");
const bcrypt = require("bcryptjs");
const { jwtAuthMiddleware, generateToKen } = require("../jwt.js");

const router = Router();

router.get("/", getToDo);

router.post("/register", async (req, res) => {
  const { prnno, password, firstname, lastname, email } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ prnno });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      prnno,
      password: hashedPassword,
      firstname,
      lastname,
      email,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    const payload = {
      id: savedUser.id,
      username: savedUser.prnno,
      email: savedUser.email,
    };
    const token = generateToKen(payload);
    // console.log(token)

    res.status(200).json({ Response: savedUser, token: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/login", async (req, res) => {
  const { prnno, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ prnno });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToKen({ user });

    res.status(200).json({ user:user, token: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
