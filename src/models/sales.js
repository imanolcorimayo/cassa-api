const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("sales", {
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
