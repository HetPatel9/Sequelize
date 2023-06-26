const express = require("express");

const User = require("./models/User");
const Order = require("./models/Order");
const Product = require("./models/Product");
const OrderDetail = require("./models/OrderDetail");
const app = express();

User.hasMany(Order);
Order.belongsTo(User);

// Order.belongsToMany(User, {
//   through: { model: OrderDetail, sourceKey: "orderId", targetKey: "userId" }
// });
// User.belongsToMany(Order, {
//   through: { model: OrderDetail, targetKey: "orderId", sourceKey: "userId" }
// });
Order.belongsToMany(User, { through: OrderDetail });
User.belongsToMany(Order, { through: OrderDetail });
module.exports = app;
