const { DataTypes, Sequelize } = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_react_redux",
  { logging: false }
);

module.exports = { db, DataTypes };
