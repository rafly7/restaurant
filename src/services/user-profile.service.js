const logEvent = require('../events/myEmitter');
const UserProfile = require('../models/user.profile.model');
const UserPermission = require('../models/user.permission.model');

const bcrypt = require('bcryptjs')

let result;

class UserProfileService {
    constructor(user_profile) {
        this.user_profile = user_profile
    }

    async getAllUserProfile() {
        try {
            result = await this.user_profile.findAll({include: UserPermission});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-USER-PROFILE-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }

    async getUserProfileById(id) {
        try {
            result = await this.user_profile.findByPk(id)
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-USER-PROFILE-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }
    
    async addUserProfile(body) {
        try {
            let salt = await bcrypt.genSalt(10);
            body.password = await bcrypt.hash(body.password, salt)
            result = await this.user_profile.create(body)
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-USER-PROFILE-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }

    async updateUserProfile(body) {
        try {
            result = await this.user_profile.findByPk(body.id);
            result.user_name = body.user_name;
            result.email = body.email;
            result.password = body.password;
            result.full_name = body.full_name;
            result.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-USER-PROFILE-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }

    async deleteUserProfile(id) {
        try {
            result = await this.user_profile.findByPk(id)
            result.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-USER-PROFILE-SERVICE-FAILED',
                logMessage: e
            })
        }
        return result;
    }
}

module.exports = UserProfileService;