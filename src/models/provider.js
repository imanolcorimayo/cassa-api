const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("provider", {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
