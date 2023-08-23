const http = require('http');
function promisifyRequest(options) {
    return new Promise((resolve, reject) => {
        const req = http.get(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = {
    promisifyRequest
}