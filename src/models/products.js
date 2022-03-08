const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      quantity: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      buy_unit: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      sell_unit: {
        type: DataTypes.STRING,
        // allowNull: false
      },
    }
  );
};