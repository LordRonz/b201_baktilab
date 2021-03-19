const { MongoClient, ObjectId } = require('mongodb');
const MongoUrl = 'mongodb://localhost/acme';
const { client } = require('../database/database');


function create(user) {
    return new Promise(async (resolve, reject)=>{
        const db = client.db('acme');
        const col = db.collection('users');
        let newUser = col.insertOne(user);
        resolve(newUser);
    });
}

function login(user) {

}

function findUser(username) {
    return new Promise(async (resolve, reject)=>{
        
        const db = client.db('acme');
        const col = db.collection('users');

        const user = await col.findOne({ username: username });
        resolve(user);
    });
}

module.exports = {
    create,
    login,
    findUser,
}