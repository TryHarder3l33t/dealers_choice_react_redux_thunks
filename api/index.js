const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/candy", require("./candy"));

module.exports = router;
