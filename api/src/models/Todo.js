const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "Todo",
        {
            task: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: false,
            }
        }
    )
}
