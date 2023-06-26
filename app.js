const express = require("express");

const User = require("./models/User");
const Order = require("./models/Order");
const Product = require("./models/Product");
const OrderDetail = require("./models/OrderDetail");
const app = express();

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: OrderDetail });
Product.belongsToMany(Order, { through: OrderDetail });

Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);

Product.hasMany(OrderDetail);
OrderDetail.belongsTo(Product);

module.exports = app;
