const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("sales", {
        products: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        client: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        total: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: ["paid out", "trusted"],
            allowNull: false,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        paid_way: {
            type: DataTypes.ENUM,
            values: ["MP", "cash", "other"],
            allowNull: true,
        },
    });
};
