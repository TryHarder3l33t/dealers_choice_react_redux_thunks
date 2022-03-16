const Sequelize = require("sequelize");
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_react_redux"
);

module.exports = { Sequelize, conn };
