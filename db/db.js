const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_react_redux"
);

module.exports = { Sequelize, db };
