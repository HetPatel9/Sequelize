const { sequelize, DataTypes } = require("./../DatabaseConnection");
const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
module.exports = User;
