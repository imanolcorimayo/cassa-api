const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("zip_city", {
    point: {
      type: DataTypes.GEOMETRY("POINT"),
      allowNull: false,
    },
    polygon: {
      type: DataTypes.GEOMETRY,
      // allowNull: false,
    },
    type_polygon: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  });
};
