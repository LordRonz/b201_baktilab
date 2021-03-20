const { MongoClient, ObjectId } = require('mongodb');
const MongoUrl = 'mongodb://localhost/acme';
const { client } = require('../database/database');

function findAll() {
    return new Promise(async (resolve, reject)=>{
        const db = client.db('acme');
        const col = db.collection('netflix_titles');

        const data = await col.find().toArray();
        // MongoClient.connect(MongoUrl, { useUnifiedTopology: true }, async (err, client)=>{
        //     if(err) throw err;
        //     let db = client.db('acme');
        //     let col = db.collection('netflix_titles');
        //     col.find().toArray((err, result)=>{
        //         if(err) throw err;
        //         else {
        //             data = result;
        //         }
        //     });
        // });
        resolve(data);
    });
}

function findById(id) {
    return new Promise(async (resolve, reject)=>{
        
        const db = client.db('acme');
        const col = db.collection('netflix_titles');

        const data = await col.findOne({ _id: ObjectId(id) });
        resolve(data);
    });
}

function create(data) {
    return new Promise(async (resolve, reject)=>{
        
        const db = client.db('acme');
        const col = db.collection('netflix_titles');
        let newData = {};
        if(Array.isArray(data)) {
            newData = col.insertMany(data);
        }
        else {
            newData = col.insertOne(data);
        }
        resolve(newData);
    });
}

function update(filter, data, option=null) {
    return new Promise(async (resolve, reject)=>{
        const db = client.db('acme');
        const col = db.collection('netflix_titles');
        const updatedData = await col.updateOne(filter, data, option ? option : { upsert: false });
        resolve(updatedData);
    });
}

module.exports = {
    findAll,
    findById,
    create,
    update,
};