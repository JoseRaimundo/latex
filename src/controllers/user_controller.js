'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.post = (req, res, next)=>{
    console.log("entrou aqui post");
    var user = new User(req.body);
    var result = user.save().then(x => {
        res.status(201).send({
            message: 'Cadastro realizado'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Erro ao cadastrar',
            data: e
        });
    });
}

exports.put = (req, res, next)=>{
    const id = req.params.id;
    console.log("entrou put");
    res.status(201).send({
        id: id,
        user: req.body
    });
}

exports.delete = (req, res, next)=>{
    const id = req.params.id;
    console.log("entrou deletar");
}


exports.get = (req, res, next)=>{
    User.find({}).then(x => {
        res.status(200).send({
            message: 'Usuário encontrado'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Erro ao buscar',
            data: e
        });
    });
}
