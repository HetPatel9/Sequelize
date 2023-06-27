const Order = require("./../models/Order");

const createOrder = async (req, res) => {
  try {
    console.log(req.body);
    const order = await Order.create(req.body);

    //   userId: req.body.userId,
    //   status: req.body.status,
    //   orderDate: req.body.orderDate,
    //   deliveryDate: req.body.deliveryDate
    // });
    res.status(201).json({
      status: "successs",
      data: order
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(201).json({
      status: "successs",
      data: orders
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};
module.exports = { createOrder, getAllOrder };
