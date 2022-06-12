const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("statistics", {
    profit: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sales_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchases_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clients_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    providers_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    best_client: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    best_client_profit: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    best_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    best_product_profit: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    best_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
