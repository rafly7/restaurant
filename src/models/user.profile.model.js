const Sequelize = require("sequelize");
const connection = require('../../config/db.connect');

const UserProfile = connection.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 12
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
}, {
    freezeTableName: true,
    tableName: 'user',
    paranoid: true
});

module.exports = UserProfile;