const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("province", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
