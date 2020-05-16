const jwt = require('jsonwebtoken');

const tokenValidation = (req, res, next) => {
    const { bureau } = req.headers;
    if (bureau) {
        const token = bureau.slice(0, bureau.length);
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.sendStatus(401);
            } else {
                const decodedToken = decoded;
                if (Date.now() >= decodedToken.exp * 1000) {
                    res.sendStatus(401)
                } else {
                    next()
                }
            }
        })
    } else {
        res.sendStatus(401)
    }
}

module.exports = tokenValidation;