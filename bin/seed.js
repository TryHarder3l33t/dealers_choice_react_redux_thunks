const { conn } = require("../db/db");

const seed = () => {
  conn.sync({ force: true });
};

module.exports = seed;
