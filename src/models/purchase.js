const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("purchase", {
    provider_id: {
      type: DataTypes.INTEGER,
    },
    details: {
      type: DataTypes.STRING,
    },
    pay_way: {
      type: DataTypes.ENUM,
      values: ["MP", "cash", "other"],
    },
    busuness_id: {
      type: DataTypes.INTEGER,
    },
    merchant_id: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
