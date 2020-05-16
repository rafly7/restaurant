const logEvent = require('../events/myEmitter');
const Permission = require('../models/user.permission.model');

let result;
class PermissionService {
    constructor(permission) {
        this.permission = permission;
    }
    
    async getAllPermission() {
        try {
            result = await this.permission.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-PERMISSION-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }

    async addPermission(body) {
        try {
            result = await this.permission.create(body)
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-PERMISSION-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }

    async updatePermission(body) {
        try {
            result = await this.permission.findByPk(body.id);
            result.level = body.level;
            result.permission = body.permission;
            result.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-PERMISSION-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }

    async deletePermission(id) {
        try {
            result = await this.permission.findByPk(id)
            result.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-PERMISSION-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }
}

module.exports = PermissionService;