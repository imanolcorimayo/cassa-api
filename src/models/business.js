const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("business", {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    business_type: {
      type: DataTypes.STRING,
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
