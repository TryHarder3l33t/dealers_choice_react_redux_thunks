const Candy = require("../db/models/Candy");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const candy = await Candy.findAll();
    console.log(`This is from the router ${candy}`);
    res.send(candy);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
