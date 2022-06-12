const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("type_merchant", {
    type: {
      type: DataTypes.ENUM,
      values: ["owner", "employ"],
      allowNull: false,
    },
  });
};
