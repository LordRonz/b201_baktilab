const { ObjectId } = require('mongodb');
const User = require('./userSchema');


async function create(user) {
    // const db = client.db('acme');
    // const col = db.collection('users');
    // let newUser = col.insertOne(user);
    // resolve(newUser);
    try {
        const newUser = new User(user);
        const savedUser = await newUser.save();
        return savedUser;
    } catch(err) {
        throw err;
    }
}

function login(user) {

}

async function findUser(username) {
    // const db = client.db('acme');
    // const col = db.collection('users');

    // const user = await col.findOne({ username: username });
    // resolve(user);
    // User.findOne({ 'username': username }, (err, res)=>{
    //     if(err) return err;
    //     return res;
    // });
    try {
        const res = await User.findOne({'username': username});
        return res;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    create,
    login,
    findUser,
}