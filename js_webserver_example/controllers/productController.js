const Product = require('../models/productModel');
const { getPostData } = require('../utils');

async function getProducts(req, res) {
    try {
        const products = await Product.findAll();

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(products));
        res.end();
    } catch(error) {
        console.log(error);
    }
}

async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id);
        if(!product) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ message: 'Product Not Found' }));
            res.end();
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(product));
            res.end();
        }
    } catch(error) {
        console.log(error);
    }
}

async function createProduct(req, res) {
    try {
        const body = await getPostData(req);
        const product = JSON.parse(body);
        const newProduct = await Product.create(product);
        res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(newProduct));
    } catch(error) {
        console.log(error);
    }
}

async function updateProduct(req, res, id) {
    try {
        const product = await Product.findById(id);
    
        if(!product) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ message: 'Product Not Found' }));
            res.end();
        }
        else {
            const body = await getPostData(req);
            const { title, description, price } = JSON.parse(body);
            const productData = {
                title: title || product.title,
                description: description || product.description,
                price: price || product.price,

            };
            const updProduct = await Product.update(id, productData);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(updProduct));
        }


    } catch(error) {
        console.log(error);
    }
}

async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findById(id);
        if(!product) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ message: 'Product Not Found' }));
            res.end();
        }
        else {
            await Product.remove(id);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ 'message': `Product ${id} removed` }));
            res.end();
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};