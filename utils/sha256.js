const crypto = require('crypto');

module.exports = function sha256(string) {
    return crypto.createHash('sha256').update(string).digest('hex');
}