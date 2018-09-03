'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    escola: {
        type: String,
        trim: true
    },
    pontos: {
        type: Number,
        default: 0
    },
    conquistas: [{
        type: String,
        trim: true
    }]

});


module.exports = mongoose.model('User', schema);