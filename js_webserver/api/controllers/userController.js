const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { ObjectId } = require('mongoose').Types;
const Users = require('../models/userModel');
const {
    getPostData, sanitize, safeParse, isJsonBodyValid,
} = require('../utils');
const { headers } = require('../headers');
const { passwordStrength } = require('../passwordStrength');
require('dotenv').config();

const createUser = async (req, res) => {
    try {
        const body = await getPostData(req);
        let user = sanitize(safeParse(body));
        if (!isJsonBodyValid(user, res)) {
            return;
        }
        if (!user.username || user.username.length === 0) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'Invalid username!' }));
            return;
        }
        if (user.username > 255) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(
                JSON.stringify({ message: 'Username is too long!' }),
            );
            return;
        }
        if (
            !user.password
            || user.password.length < 8
            || user.password.length > 255
        ) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            if (user.password) {
                res.end(
                    JSON.stringify({
                        message:
                            'Password must be between 8-255 characters long',
                    }),
                );
                return;
            }
            res.end(JSON.stringify({ message: 'Invalid password!' }));
            return;
        }
        if (passwordStrength(user.password).id < 2) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(
                JSON.stringify({ message: 'Password is too weak!' }),
            );
            return;
        }
        if (!user.username.match(/\w+$/)) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(
                JSON.stringify({
                    message:
                        'Username must contain only letters, numbers, and underscores',
                }),
            );
            return;
        }
        const userExist = await Users.findUser(user.username);
        if (userExist) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'Username Taken!' }));
            return;
        }
        const salt = bcrypt.genSalt(13);
        const shaPass = crypto
            .createHmac('sha256', process.env.SHA_SECRET_KEY || 'yourmomgae')
            .update(user.password)
            .digest('hex');
        const hashedPass = await bcrypt.hash(shaPass, await salt);
        user = { ...user, password: hashedPass };
        const newUser = Users.create(user);
        res.writeHead(201, { ...headers, 'Content-Type': 'application/json' });
        res.end(JSON.stringify(await newUser));
        return;
    } catch (e) {
        console.log(e);
        res.writeHead(500, { ...headers, 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
};

const loginUser = async (req, res) => {
    try {
        const body = await getPostData(req);
        const parsed = sanitize(safeParse(body));
        if (!isJsonBodyValid(parsed, res)) {
            return;
        }
        const { username } = parsed;
        if (!username || !parsed.password) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(
                JSON.stringify({ message: 'Provide a username and password!' }),
            );
            return;
        }
        const user = await Users.findUser(username);
        if (!user) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'User Not Found' }));
            return;
        }
        const shaPass = crypto
            .createHmac('sha256', process.env.SHA_SECRET_KEY || 'yourmomgae')
            .update(parsed.password)
            .digest('hex');
        const validPass = await bcrypt.compare(shaPass, user.password);
        if (!validPass) {
            res.writeHead(401, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'Not Allowed' }));
            return;
        }

        const token = jwt.sign(
            { _id: user._id },
            process.env.ACCESS_TOKEN_SECRET || 'yourmomgae',
            { algorithm: 'HS512', expiresIn: 30 * 69 },
        );
        res.statusCode = 200;
        res.writeHead(200, {
            ...headers,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });
        res.write(JSON.stringify({ message: 'Success', token }));
        res.end();
    } catch (e) {
        console.log(e);
        res.writeHead(500, { ...headers, 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
};

const changePass = async (req, res) => {
    try {
        const body = await getPostData(req);
        const parsed = sanitize(safeParse(body));
        if (!isJsonBodyValid(parsed, res)) {
            return;
        }
        const { oldPassword, newPassword, username } = parsed;
        if (!username || !newPassword || !oldPassword) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(
                JSON.stringify({
                    message: 'Provide username, oldPassword, and newPassword!',
                }),
            );
            return;
        }
        const user = await Users.findUser(username);
        if (!user) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'User Not Found' }));
            return;
        }
        if (passwordStrength(newPassword).id < 2) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'Password is too weak!' }));
            return;
        }
        const shaPass = crypto
            .createHmac('sha256', process.env.SHA_SECRET_KEY || 'yourmomgae')
            .update(oldPassword)
            .digest('hex');
        const validPass = await bcrypt.compare(shaPass, user.password);
        if (!validPass) {
            res.writeHead(401, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'Not Allowed' }));
            return;
        }
        const salt = bcrypt.genSalt(13);
        const shaNewPass = crypto
            .createHmac('sha256', process.env.SHA_SECRET_KEY || 'yourmomgae')
            .update(newPassword)
            .digest('hex');
        const hashedNewPass = await bcrypt.hash(shaNewPass, await salt);
        user.password = hashedNewPass;
        const updatedUser = user.save();
        res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
        res.end(JSON.stringify(await updatedUser));
    } catch (e) {
        console.log(e);
        res.writeHead(500, { ...headers, 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
};

const deleteUser = async (req, res) => {
    try {
        const body = await getPostData(req);
        const parsed = sanitize(safeParse(body));
        if (!isJsonBodyValid(parsed, res)) {
            return;
        }
        const { username, password } = parsed;
        if (!username || !password) {
            res.writeHead(400, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(
                JSON.stringify({ message: 'Provide username and password!' }),
            );
            return;
        }
        const user = await Users.findUser(username);
        if (!user) {
            res.writeHead(404, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'User Not Found' }));
            return;
        }
        const shaPass = crypto
            .createHmac('sha256', process.env.SHA_SECRET_KEY || 'yourmomgae')
            .update(password)
            .digest('hex');
        const validPass = await bcrypt.compare(shaPass, user.password);
        if (!validPass) {
            res.writeHead(401, {
                ...headers,
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify({ message: 'Not Allowed' }));
            return;
        }
        const deletedUser = Users.del({ _id: ObjectId(user._id) });
        res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
        res.end(JSON.stringify(await deletedUser));
    } catch (e) {
        console.log(e);
        res.writeHead(500, { ...headers, 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
};

module.exports = {
    createUser,
    loginUser,
    changePass,
    deleteUser,
};
