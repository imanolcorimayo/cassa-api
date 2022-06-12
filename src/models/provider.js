const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("provider", {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    zip_city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
