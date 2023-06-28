const express = require("express");

const User = require("./models/User");
const Order = require("./models/Order");
const Product = require("./models/Product");
const OrderDetail = require("./models/OrderDetail");

const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const orderRouter = require("./router/orderRouter");
const orderDetailRouter = require("./router/orderDetailRouter");
const queries = require("./query");

const app = express();

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: OrderDetail });
Product.belongsToMany(Order, { through: OrderDetail });

Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);

Product.hasMany(OrderDetail);
OrderDetail.belongsTo(Product);

app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/orderdetail", orderDetailRouter);

app.get("/fetchAllUserOrder", queries.fetchAllUserOrder);
app.get("/undeliveredOrder", queries.undeliveredOrder);
app.get("/activeUsers", queries.activeUsers);
app.get("/inactiveUsers", queries.inactiveUsers);
app.get("/recentOrders", queries.recentOrders);
app.get("/popularProducts", queries.popularPorduct);
app.get("/mostExpensiveOrder", queries.mostExpensiveOrder);
app.get("/mostCheapOrder", queries.mostCheapOrder);

module.exports = app;
