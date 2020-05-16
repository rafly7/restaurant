const Sequelize = require("sequelize");
const connection = require('../../config/db.connect');

const Kuliner = connection.define('kuliner', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    nama_tempat: {
        type: Sequelize.STRING
    },
    lokasi: {
        type: Sequelize.STRING
    },
    specialist: {
        type: Sequelize.STRING
    },
    range: {
        type: Sequelize.STRING
    },
    menu: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'kuliner',
    paranoid: true
});

module.exports = Kuliner;