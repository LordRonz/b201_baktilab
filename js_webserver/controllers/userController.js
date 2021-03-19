const Users = require('../models/userModel');
const { getPostData } = require('../utils');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
    try {
        const body = await getPostData(req);
        let user = JSON.parse(body);
        const salt = await bcrypt.genSalt(13);
        const hashedPass = await bcrypt.hash(user.password, salt);
        user = {...user, password: hashedPass};
        const newUser = await Users.create(user);
        res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(newUser));
    } catch(error) {
        console.log(error);
    }
}

async function loginUser(req, res) {
    try {
        const body = await getPostData(req);
        const parsed = JSON.parse(body);
        const username = parsed.username;
        const user = await Users.findUser(username);
        if(!user) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User Not Found' }));
            return;
        }
        if(await bcrypt.compare(parsed.password, user.password)) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Success' }));
        }
        else {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Not Allowed' }));
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    loginUser,
}