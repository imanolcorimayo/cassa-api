const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("product", {
    business_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buy_price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    sell_price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    buy_unit: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    sell_unit: {
      type: DataTypes.STRING,
      // allowNull: false
    },
  });
};
