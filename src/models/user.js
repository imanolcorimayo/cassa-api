const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("user", {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    province_id: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    zip_city_id: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    address_id: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      // allowNull: false,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    // allowNull: false
    photo: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false
    },
  });
};
