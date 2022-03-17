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

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.findByPk(req.params.id);

    await deleted.destroy();
    console.log(`They are gone ${req.params.id}`);
    res.send(deleted);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
