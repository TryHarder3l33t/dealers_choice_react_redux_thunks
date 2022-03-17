const { db } = require("../db/db");
const Candy = require("../db/models/Candy");
const User = require("../db/models/User");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const hersheyKisses = await Candy.create({
      name: "Hershey Kisses",
      quantity: "500",
      price: "29.99",
    });
    const snickers = await Candy.create({
      name: "Snickers",
      type: "Chocolate",
      price: "19.99",
    });
    const jawBreakers = await Candy.create({
      name: "Jaw Breakers",
      type: "Candy",
      price: "9.99",
    });

    const skittles = await Candy.create({
      name: "Skittles",
      type: "candy",
      quantity: "3000",
      price: "12.99",
    });
    const bazooka = await Candy.create({
      name: "Bazooka",
      type: "Gum",
      price: "34.99",
    });
    const eric = await User.create({
      name: "Eric",
      nickName: "Jeff",
      email: "TSuper@gmail.com",
      phone: "441-347-3387",
    });
    const bobby = await User.create({
      name: "Bobby",
      nickName: "Ronald",
      phone: "555-777-9311",
    });
    const tom = await User.create({
      name: "Tom",
      nickName: "One Eye",
      email: "badggs@gmail.com",
    });
    const jeff = await User.create({
      name: "Jeff",
      nickName: "Macho",
      email: "davidw@gmail.com",
      phone: "845-234-1234",
    });
    const johnny = await User.create({
      name: "Johnny",
      nickName: "Jeff",
      email: "TSuper@gmail.com",
      phone: "441-347-3387",
    });
    const gilbert = await User.create({
      name: "Gilbert",
      nickName: "Ronald",
      phone: "555-777-9311",
    });
    const ronald = await User.create({
      name: "Ronald",
      nickName: "One Eye",
      email: "badggs@gmail.com",
    });
    const alice = await User.create({
      name: "Alice",
      nickName: "Macho",
      email: "davidw@gmail.com",
      phone: "845-234-1234",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
