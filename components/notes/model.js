const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        requried: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const model = mongoose.model('Note', noteSchema);
module.exports = model;