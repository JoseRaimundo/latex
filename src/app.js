
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://ifpb:ifpb1234@ds018558.mlab.com:18558/mapaedu');
const router = express.Router();

const index =  require('./routes/index_route');
const user  =  require('./routes/user_route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', user);
app.use('/', index);

module.exports = app;