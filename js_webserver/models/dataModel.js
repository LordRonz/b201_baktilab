const { ObjectId } = require('mongodb');
const { client } = require('../database/database');
const Data = require('./dataSchema');

async function findAll() {
    try {
        const res = await Data.find().limit();
        return res;
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
        
    }
    catch(err) {
        throw err;
    }
}

async function findById(id) {
    try {
        const res = await Data.findOne({ _id: ObjectId(id) });
        return res;
    } catch(err) {
        throw err;
    }
}

async function create(data) {
    // return new Promise(async (resolve, reject)=>{
        
    //     const db = client.db('acme');
    //     const col = db.collection('netflix_titles');
    //     let newData = {};
    //     if(Array.isArray(data)) {
    //         newData = col.insertMany(data);
    //     }
    //     else {
    //         newData = col.insertOne(data);
    //     }
    //     resolve(newData);
    // });
    try {
        // const newData = new Data(data);
        // const savedData = await newData.save();
        // return savedData;
        let newData = {};
        if(Array.isArray(data)) {
            newData = await Data.insertMany(data);
            return newData;
        }
        newData = new Data(data);
        const savedData = await newData.save();
        return savedData;
    } catch(err) {
        throw err;
    }
}

async function update(filter, data, option=null) {
    // return new Promise(async (resolve, reject)=>{
    //     const db = client.db('acme');
    //     const col = db.collection('netflix_titles');
    //     const updatedData = await col.updateOne(filter, data, option ? option : { upsert: false });
    //     resolve(updatedData);
    // });
    try {
        const updatedData = await Data.findOneAndUpdate(filter, data, {
            new: true,
        });
        return updatedData;
    } catch(err) {
        throw err;
    }
}

async function del(filter) {
    try {
        const res = await Data.deleteOne(filter);
        return res;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    del,
};