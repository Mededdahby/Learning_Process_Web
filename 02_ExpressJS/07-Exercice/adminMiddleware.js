// adminMiddleware.js
const jwt = require('jsonwebtoken');

const adminMiddleware = (req, res, next) => {
    const token = req.headers['authorization']; 

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, 'YourSecretKey', (err, data) => {
        if (err || data.username !== 'admin' || data.password !== "123") {
            return res.status(401).json({ message: 'Invalid or insufficient token. Admin access required' });
        }
        next();
    });
};

module.exports = adminMiddleware;
