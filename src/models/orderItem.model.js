const Sequelize = require("sequelize");
const connection = require('../../config/dbConn');

const OrderItem = connection.define('orderItem', {
    qty: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    tableName: 'orderItem',
    underscored: true,
});

module.exports = OrderItem;