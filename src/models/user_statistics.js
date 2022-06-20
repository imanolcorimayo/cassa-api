const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("user_statistics", {
    expenses: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
