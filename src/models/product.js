const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      buy_price: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      sell_price: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
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