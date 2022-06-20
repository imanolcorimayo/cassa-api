const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("user_month_statistics", {
    best_commerce: {
      type: DataTypes.INTEGER,
    },
    best_product: {
      type: DataTypes.INTEGER,
    },
    purchase_number: {
      type: DataTypes.FLOAT,
    },
  });
};
