const Data = require('../models/dataModel');
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
    }
}

module.exports = {
    getAllData,
    getData,
    createData,
};