const logEvent = require('../events/myEmitter');
const Kuliner = require('../models/kuliner.model');
const Category = require('../models/category.model');
// const sequelize = require('../../config/dbConn');

class KulinerService {
    constructor(kuliner) {
        this.kuliner = kuliner;
    }
    async getAllKuliner() {
        let result;
        try {
            // result = await Product.findAll();
            result = await this.kuliner.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-KULINER-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    // async getAllProductPaging(offset, limit) {
    //     let result;
    //     try {
    //         // result = await Product.findAll();
    //         result = await this.kuliner.findAndCountAll({offset: Number(offset), limit: Number(limit)});
    //     } catch (e) {
    //         logEvent.emit('APP-ERROR', {
    //             logTitle: 'GET-KULINER-SERVICE-FAILED',
    //             logMessage: e
    //         });
    //         throw new Error(e);
    //     }
    //     return result;
    // }

    async getKulinerById(id) {
        let result;
        try {
            result = await this.kuliner.findByPk(id)
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-kULINER-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async createKuliner(body) {
        let result;
        try {
            result = await this.kuliner.create(body);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-KULINER-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async updateKuliner(body) {
        let result;
        try {
            result = await this.kuliner.findByPk(body.id);
            result.nama_tempat = body.nama_tempat;
            result.lokasi = body.lokasi;
            result.specialist = body.specialist;
            result.range = body.range;
            result.menu = body.menu;
            result.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-KULINER-SERVICE-FAILED',
                logMessage: e
            })
            throw new Error(e)
        }
        return result;
    }

    async deleteKuliner(id) {
        let result;
        try {
            result = await this.kuliner.findByPk(id);
            result.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-KULINER-SERVICE-FAILED',
                logMessage: e
            })
            throw new Error(e)
        }
        return result;
    }
}

module.exports = KulinerService;