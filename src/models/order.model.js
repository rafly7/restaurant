const Sequelize = require("sequelize");
const connection = require('../../config/dbConn');

const Order = connection.define('order', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    orderDate: {
        type: Sequelize.DATE
    },
    outletCode: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'order',
    underscored: true,
});

module.exports = Order;