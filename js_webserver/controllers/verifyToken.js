const { getHeader } = require('../utils');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function verifyToken(req, res) {
    try {
        const authToken = await getHeader(req, 'auth-token');

        if(!authToken) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: "Access Denied" }));
        }
        try {
            const verified = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, { algorithms: ['HS512'] });
            req.user = verified;
        }
        catch(err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: "Invalid Token" }));
        }
    }
    catch(err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
}

module.exports = {
    verifyToken,
}