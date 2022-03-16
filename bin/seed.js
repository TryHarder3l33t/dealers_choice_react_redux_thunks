const { db } = require("../db/db");
const User = require("../db/models/User");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const albert = await User.create({
      name: "Eric",
      nickName: "TryHarder",
      email: "TryHarder3l33t@gmail.com",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
