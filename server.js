'use strict'


console.log('teste');

const http = require('http');
const debug = require('debug')('mapaedu:server');
const express = require('express');


const app = express();
const port = 3000;
app.set('port', port);


const server = http.createServer(app);
const router = express.Router();


const route = router.get('/', (requestAnimationFrame, res, next)=>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);


server.listen(port);
console.log("API Conectado " + port);