const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("month_statistics", {
    statistics_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profit_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    incomes: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    expenses: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
