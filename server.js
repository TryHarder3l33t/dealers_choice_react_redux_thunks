const express = require("express");
const app = express();
const port = 3000;
const seed = require("./bin/seed");
app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${port}`);
});

seed();

module.exports = app;
