const { db, DataTypes } = require("../db");

const Candy = db.define(
  "candy",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: function (candy) {
        if (!candy.type) {
          candy.type = "No type Provided";
        }
        if (!candy.quantity) {
          candy.quantity = "No Quantity Provided";
        }
        console.log(`
        Candy Created
            Name:     ${candy.name}
            Price: ${candy.price}
            Type:    ${candy.type}
            Quantity:    ${candy.quantity}
            `);
      },
    },
  }
);

module.exports = Candy;
