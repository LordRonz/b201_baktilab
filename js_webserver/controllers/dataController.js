const Data = require('../models/dataModel');
const { ObjectId } = require('mongodb');
const { getPostData } = require('../utils');

async function getAllData(req, res) {
    try {
        const data = await Data.findAll();

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    } catch(error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end({ message: "Internal Server Error" });
    }
}

async function getData(req, res, id) {
    try {
        const data = await Data.findById(id);
        if(!data) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ message: 'Data Not Found' }));
            res.end();
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(data));
            res.end();
        }
    } catch(error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end({ message: "Internal Server Error" });
    }
}

async function createData(req, res) {
    try {
        const body = await getPostData(req);
        const data = JSON.parse(body);
        const newData = await Data.create(data);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newData));
    } catch(error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end({ message: "Internal Server Error" });
    }
}

async function updateData(req, res, id) {
    try {
        const body = await getPostData(req);
        const filter = { _id: ObjectId(id) };
        const updateDoc = {
            $set: JSON.parse(body),
        };
        const updData = await Data.update(filter, updateDoc);
    
        if(updData.modifiedCount === 1) {
            // const dataData = {
            //     title: title || product.title,
            //     description: description || product.description,
            //     price: price || product.price,
            // };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(updData));
        }
        else if(updData.matchedCount === 1){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ message: 'Data Found But Not Modified' }));
            return res.end();
        }
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end({ message: "Data Not Found" });
        }
    } catch(error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end({ message: "Internal Server Error" });
    }
}

async function deleteData(req, res, id) {
    try {
        const query = { _id: ObjectId(id) };
        const result = await Data.del(query);
        if(result.deletedCount === 1) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(result));
            res.end();
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ message: 'Data Not Found' }));
            res.end();
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getAllData,
    getData,
    createData,
    updateData,
    deleteData,
};