const express = require("express");
const app = express();
const port = 3000;
const seed = require("./bin/seed");
const path = require("path");
app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${port}`);
});
//normal posts the other is form posts
app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
seed();

app.use("/api", require("./api"));

module.exports = app;
