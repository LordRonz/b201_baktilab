const { MongoClient, ObjectId } = require('mongodb');
const MongoUrl = 'mongodb://localhost/acme';
const { client } = require('../database/database');
const User = require('./userSchema');


function create(user) {
    return new Promise(async (resolve, reject)=>{
        // const db = client.db('acme');
        // const col = db.collection('users');
        // let newUser = col.insertOne(user);
        // resolve(newUser);
        const newUser = new User(user);
        try {
            const savedUser = await newUser.save();
            resolve(savedUser);
        }
        catch(err) {
            reject(err);
        }
    });
}

function login(user) {

}

function findUser(username) {
    return new Promise(async (resolve, reject)=>{
        
        // const db = client.db('acme');
        // const col = db.collection('users');

        // const user = await col.findOne({ username: username });
        // resolve(user);
        User.findOne({ 'username': username }, (err, res)=>{
            resolve(res);
        });
    });
}

module.exports = {
    create,
    login,
    findUser,
}