
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
//conexão do banco local
//mongoose.connect('mongodb://localhost:27017/mapaedu', { useNewUrlParser: true });
//conexão do banco online
mongoose.connect('mongodb://ifpb:ifpb1234@ds141812.mlab.com:41812/mapaedu', { useNewUrlParser: true });

//models
const User = require('./model/user');

//rotas
const index =  require('./routes/index_route');
const user  =  require('./routes/user_route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/user', user);
app.use('/', index);

module.exports = app;

