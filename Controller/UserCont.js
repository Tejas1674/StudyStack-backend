const User = require("../model/User");

module.exports.getToDo = async (req, res) => {
  const toDo = await User.find();
  //console.log(toDo[0].username);
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  User.create({ text }).then((data) => {
    console.log("Added Suceessfully");
    //console.log(data)
    res.send(data);
  });
};
