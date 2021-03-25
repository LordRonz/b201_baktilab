const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/test1', { useNewUrlParser: true, useUnifiedTopology:true }, ()=>{
    console.log('Connected to DB');
});