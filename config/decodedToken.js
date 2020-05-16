const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
module.exports = async function (token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            const decodedToken = decoded;
            if (err || Date.now() >= decodedToken.exp * 1000) {
                reject('Authenticated Failed');
            } else {
                //return decodedToken;
                return resolve(decodedToken)
            }
        })
    })
}