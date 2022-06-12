const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("city", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
