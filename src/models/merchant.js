const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("merchant", {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    type_merchant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
