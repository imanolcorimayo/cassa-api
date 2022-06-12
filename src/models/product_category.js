const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("product_category", {
    business_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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
