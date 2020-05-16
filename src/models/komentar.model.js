const Sequelize = require("sequelize");
const connection = require('../../config/db.connect');

const Komentar = connection.define('komentar', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    user_name: {
        type: Sequelize.STRING
    },
    nama_tempat: {
        type: Sequelize.ENUM('Gojira', 'Pizza Hut', 'Rumah Makan Ampera')
    },
    status_like: {
        type: Sequelize.INTEGER
    },
    review: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'komentar',
    paranoid: true
});

module.exports = Komentar;