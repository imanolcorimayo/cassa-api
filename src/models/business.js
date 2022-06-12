const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("business", {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    address_id: {
      type: DataTypes.INTEGER,
    },
    statistics_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    business_type: {
      type: DataTypes.STRING,
    },
    zip_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
};
