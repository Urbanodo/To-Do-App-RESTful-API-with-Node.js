const sendJSON = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

const parseBody = (req, callback) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            callback(null, data);
        } catch {
            callback('Invalid JSON', null);
        }
    });
};

module.exports = { sendJSON, parseBody };