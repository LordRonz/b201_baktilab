const mongoose = require('mongoose');

// const dataSchema = new mongoose.Schema({
//     Age: {
//         type: Number,
//         required: false,
//     },
//     Age1stCode: {
//         type: Number,
//         required: false,
//     },
//     Country: {
//         type: String,
//         required: false,
//         max: 30,
//     },
//     DatabaseDesireNextYear: {
//         type: String,
//         required: false,
//         max: 500,
//     },
//     DatabaseWorkedWith: {
//         type: String,
//         required: false,
//         max: 500,
//     },
//     DevType: {
//         type: String,
//         required: false,
//         max: 500,
//     },
//     DatabaseWorkedWith: {
//         type: String,
//         required: false,
//         max: 500,
//     },
//     Employment: {
//         type: String,
//         required: false,
//         max: 500,
//     },
//     Gender: {
//         type: String,
//         required: false,
//         max: 20,
//     },
//     LanguageDesireNextYear: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     LanguageWorkedWith: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     MiscTechDesireNextYear: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     MiscTechWorkedWith: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     OpSys: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     PlatformWorkedWith: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     UndergradMajor: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     WebframeDesireNextYear: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     WebframeWorkedWith: {
//         type: String,
//         required: false,
//         max: 200,
//     },
//     YearsCode: {
//         type: Number,
//         required: false,
//     },
//     YearsCodePro: {
//         type: Number,
//         required: false,
//     },
// });

const dataSchema = new mongoose.Schema({
    kontol: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('datas', dataSchema);