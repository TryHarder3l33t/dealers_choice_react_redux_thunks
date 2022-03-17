const Candy = require("../db/models/Candy");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const candy = await Candy.findAll();
    res.send(candy);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
