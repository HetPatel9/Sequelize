const { sequelize, DataTypes } = require("./../DatabaseConnection");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.ENUM,
      values: ["undelivered", "delivered"]
    },
    orderDate: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    delivaryDate: {
      type: DataTypes.DATE,
      defaultValue: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
module.exports = Order;
