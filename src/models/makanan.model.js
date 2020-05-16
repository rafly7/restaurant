const Sequelize = require("sequelize");
const connection = require('../../config/db.connect');

const Makanan = connection.define('makanan', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    nama_makanan: {
        type: Sequelize.STRING
    },
    harga: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    tableName: 'makanan',
    paranoid: true
});

module.exports = Makanan;