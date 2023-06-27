const User = require("./../models/User");

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email
    });
    res.status(201).json({
      status: "successs",
      data: user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(201).json({
      status: "successs",
      data: users
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};
module.exports = { createUser, getAllUser };
