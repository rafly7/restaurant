const logEvent = require('../events/myEmitter');
const sequelize = require('../../config/db.connect');

class ReportingService {
    constructor(report) {
        this.report = report;
    }
    /**
     * 
     */
    async getSumLike() {
        let result;
        try {
            // result = await Product.findAll();
            result = await sequelize.query('SELECT komentar.nama_tempat, sum(komentar.status_like) as terfavorit from kuliner join komentar on komentar.nama_tempat = kuliner.nama_tempat group by nama_tempat');
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-KULINER-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getTerfavorit() {
        let result;
        try {
            // result = await Product.findAll();
            result = await sequelize.query('SELECT komentar.nama_tempat, sum(komentar.status_like) as terfavorit from kuliner join komentar on komentar.nama_tempat = kuliner.nama_tempat group by nama_tempat');
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

    
}

module.exports = ReportingService;