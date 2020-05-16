const logEvent = require('../events/myEmitter');
const Komentar = require('../models/kuliner.model');

class KomentarService {
    constructor(komentar) {
        this.komentar = komentar;
    }
    async getAllKomentar() {
        let result;
        try {
            // result = await Product.findAll();
            result = await this.komentar.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-KOMENTAR-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getKomentarById(id) {
        let result;
        try {
            result = await this.komentar.findByPk(id)
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-KOMENTAR-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async createKomentar(user,body) {
        let result;
        try {
            body.user_name = user
            result = await this.komentar.create(body);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-KOMENTAR-SERVICE-FAILED',
                logMessage: e
            });
        }
        return result;
    }

    async updateKomentar(body) {
        let result;
        try {
            result = await this.komentar.findByPk(body.id);
            result.nama_tempat = body.nama_tempat;
            result.status_like = body.status_like;
            result.review = body.review;
            result.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-KOMENTAR-SERVICE-FAILED',
                logMessage: e
            })
            throw new Error(e)
        }
        return result;
    }

    async deleteKomentar(id) {
        let result;
        try {
            result = await this.komentar.findByPk(id);
            result.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-KOMENTAR-SERVICE-FAILED',
                logMessage: e
            })
            throw new Error(e)
        }
        return result;
    }
}

module.exports = KomentarService;