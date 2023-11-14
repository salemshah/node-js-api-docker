const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: 'Le contenu est requis'
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Comments', postSchema);