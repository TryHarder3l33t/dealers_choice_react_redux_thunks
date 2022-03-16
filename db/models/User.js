const { db, DataTypes } = require("../db");

const User = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: function (user) {
        if (!user.email) {
          user.email = "No Email Provided";
        }
        if (!user.phone) {
          user.phone = "No Phone Number Provided";
        }
        console.log(`
        User Created
            Name:     ${user.name}
            NickName: ${user.nickName}
            Email:    ${user.email}
            Phone:    ${user.phone}
            `);
      },
    },
  }
);

module.exports = User;
