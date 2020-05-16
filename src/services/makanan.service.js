const logEvent = require('../events/myEmitter');
const Makanan = require('../models/makanan.model');
const Category = require('../models/category.model');
// const sequelize = require('../../config/dbConn');

class MakananService {
    constructor(makanan) {
        this.makanan = makanan;
    }
    async getAllMakanan() {
        let result;
        try {
            // result = await Product.findAll();
            result = await this.makanan.findAll({include: Category});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MAKANAN-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getMakananById(id) {
        let result;
        try {
            result = await this.makanan.findByPk(id)
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MAKANAN-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async createMakanan(body) {
        let result;
        try {
            result = await this.makanan.create(body);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-MAKANAN-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async updateMakanan(body) {
        let result;
        try {
            result = await this.makanan.findByPk(body.id);
            result.nama_makanan = body.nama_makanan;
            result.harga = body.harga;
            result.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-MAKANAN-SERVICE-FAILED',
                logMessage: e
            })
            throw new Error(e)
        }
        return result;
    }

    async deleteMakanan(id) {
        let result;
        try {
            result = await this.makanan.findByPk(id);
            result.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-MAKANAN-SERVICE-FAILED',
                logMessage: e
            })
            throw new Error(e)
        }
        return result;
    }
}

module.exports = MakananService;