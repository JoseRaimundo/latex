'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const schema = new Schema({
    nome: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
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