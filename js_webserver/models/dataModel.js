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

// function createData() {
//     MongoClient.connect(MongoUrl, { useUnifiedTopology: true }, async (err, client)=>{
//         if(err) throw err;
//         const db = client.db('acme');
//         const col = db.collection('netflix_titles');
//         const data = await col.findOne({ _id: ObjectId(id) });
//         console.log(JSON.stringify(data));
//     });
// }

module.exports = {
    findAll,
    findById,
};