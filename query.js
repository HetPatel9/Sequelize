const Order = require("./models/Order");
const User = require("./models/User");
const Product = require("./models/Product");
const { sequelize } = require("./DatabaseConnection");

const fetchAllUserOrder = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Product,
          attributes: ["name"],
          through: {
            attributes: []
          }
        },
        {
          model: User,
          attributes: ["name"]
        }
      ],
      attributes: [
        "id",
        "orderDate",
        [
          sequelize.literal("DATEDIFF(deliveryDate,orderDate)"),
          "Expected_delivery_date"
        ]
      ]
    });
    console.log(JSON.stringify(orders, null, 2));
    res.status(200).json({
      status: "success",
      data: orders
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

const undeliveredOrder = async (req, res) => {
  try {
    const undeliveredOrders = await Order.findAll({
      where: { status: "undelivered" }
    });
    res.status(200).json({
      status: "success",
      data: undeliveredOrders
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

const activeUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name"],
      include: {
        model: Order,
        required: true,
        attributes: []
      }
    });

    res.status(200).json({
      status: "success",
      data: users
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

const inactiveUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Order
      },
      where: {
        "$orders.userId$": null
      }
    });
    res.status(200).json({
      status: "success",
      data: users
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

module.exports = {
  fetchAllUserOrder,
  undeliveredOrder,
  activeUsers,
  inactiveUsers
};
