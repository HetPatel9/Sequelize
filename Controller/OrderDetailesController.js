const OrderDetail = require("./../models/OrderDetail");

const createOrderDetail = async (req, res) => {
  try {
    console.log(req.body);
    const orderDetail = await OrderDetail.create(req.body);
    res.status(201).json({
      status: "successs",
      data: orderDetail
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};

const getAllOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetail.findAll();
    res.status(201).json({
      status: "successs",
      data: orderDetails
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      err
    });
  }
};
module.exports = { createOrderDetail, getAllOrderDetails };
