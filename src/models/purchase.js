const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("purchase", {
    details: {
      type: DataTypes.STRING,
    },
    pay_way: {
      type: DataTypes.ENUM,
      values: ["MP", "cash", "other"],
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
