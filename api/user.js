const User = require("../db/models/User");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(`This is from the router ${users}`);
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
