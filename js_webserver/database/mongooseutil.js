const mongoose = require('mongoose');
require('dotenv').config();

module.exports = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology:true }, ()=>{
    console.log('Connected to DB');
});