const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const UserProfile = require('../models/user.profile.model');
const bcrypt = require('bcryptjs');
const logEvent = require('../events/myEmitter')

dotenv.config();

class AuthService {
    // constructor(auth) {
    //     this.auth = auth;
    // }
    async authenticate(user) {
        const {user_name, password} = user;
        let authUser;
        try {
            authUser = await UserProfile.findOne({
                where: {
                    user_name: user_name,
                }
            })
            const matchPassword = bcrypt.compareSync(password, authUser.password);
            if (matchPassword) {
                const expiresIn = 10**4;
                const accessToken = jwt.sign({id: user.id, user_name: user_name}, process.env.SECRET_KEY, {
                    expiresIn: expiresIn
                })
                authUser = {
                    user: {
                        userId: authUser.id,
                        user_name: authUser.user_name,
                        email: authUser.email,
                        password: authUser.password,
                        full_name: authUser.full_name
                    }, token: accessToken
                };
            } else {
                authUser = null;
            }
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'AUTHENTICATE-FAILED',
                logMessage: e
            })
            throw new Error(e);
        }
        return authUser
    }
}

module.exports = AuthService;