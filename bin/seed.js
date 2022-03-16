const { db } = require("../db/db");

const seed = () => {
  db.sync({ force: true });
};

module.exports = seed;
