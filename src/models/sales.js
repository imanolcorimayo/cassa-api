const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("sales", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    business_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
    },
    paid_way: {
      type: DataTypes.ENUM,
      values: ["MP", "cash", "other"],
    },
    is_trusted: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });
};
