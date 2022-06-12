const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("address", {
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    floor: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  });
};
