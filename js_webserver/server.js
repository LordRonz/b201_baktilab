require('dotenv').config();
const http = require('http');
const { MongoClient } = require('mongodb');
const MongoUrl = 'mongodb://localhost/acme';
const { getAllData, getData, createData } = require('./controllers/dataController');
const { createUser, loginUser } = require('./controllers/userController');
const { client } = require('./database/database');
const jwt = require('jsonwebtoken');

client.connect();

const users = [];

const server = http.createServer((req, res)=>{
    if(req.url === '/api/data' && req.method === 'GET') {
        getAllData(req, res);
    }
    else if(req.url.match(/\/api\/data\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        getData(req, res, id);
    }
    else if(req.url === '/api/data' && req.method === 'POST') {
        createData(req, res);
    }
    else if(req.url.match(/\/api\/data\/([0-9]+)/) && req.method === 'PUT') {
        // const id = req.url.split('/')[3];
        // updateData(req, res, id);
    }
    else if(req.url.match(/\/api\/data\/([0-9]+)/) && req.method === 'DELETE') {
        // const id = req.url.split('/')[3];
        // deleteData(req, res, id);
    }
    else if(req.url === '/user' && req.method === 'POST') {
        createUser(req, res);
    }
    else if(req.url === '/user/login' && req.method === 'POST') {
        loginUser(req, res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`))