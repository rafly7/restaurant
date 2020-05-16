const Sequelize = require('sequelize');
const connection = require('../../config/db.connect');

/**
 * Function Value Define for create object foreign key
 */
const UserPermissions = connection.define('userPermission', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    level: {
        type: Sequelize.INTEGER
    },
    permission: {
        type: Sequelize.STRING(128)
    }
}, {
    freezeTableNAme: true,
    tableName: 'permissions',
    paranoid: true,
})

module.exports = UserPermissions;