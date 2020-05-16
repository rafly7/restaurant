const Sequelize = require("sequelize");
const connection = require('../../config/db.connect');

const Category = connection.define('category', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    category_name: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'category',
    paranoid: true,
    underscored: true,
});

module.exports = Category;