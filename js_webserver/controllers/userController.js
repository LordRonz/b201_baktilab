const Users = require('../models/userModel');
const { getPostData } = require('../utils');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
    try {
        const body = await getPostData(req);
        let user = JSON.parse(body);
        const userExist = await Users.findUser(user.username);
        if(userExist) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: "Username Taken!" }));
        }
        if(!user.username || user.username.length === 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: "Invalid username!" }));
        }
        if(!user.password || user.password.length < 8) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            if(user.password) {
                return res.end(JSON.stringify({ message: "Passwords must be at least 8 characters long" }));
            }
            return res.end(JSON.stringify({ message: "Invalid username!" }));
        }
        const salt = await bcrypt.genSalt(13);
        const hashedPass = await bcrypt.hash(user.password, salt);
        user = { ...user, password: hashedPass };
        const newUser = await Users.create(user);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ 
            id: newUser.ops[0]._id,
            username: newUser.ops[0].username,
            message: "Account successfully created",
        }));
    } catch(error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: "Internal Server Error" }));
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
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
}

module.exports = {
    createUser,
    loginUser,
}