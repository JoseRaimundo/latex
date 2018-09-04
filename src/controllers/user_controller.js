'use strict'

const mongoose = require('mongoose');
const md5 = require('md5');
const User = mongoose.model('User');

exports.post = (req, res, next)=>{
    console.log("entrou aqui post");
    var user = new User(req.body);
    user.password = md5(req.body.password);
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


exports.login = (req, res, next)=>{
    console.log("Entrou no login")
    var pass   = md5(req.body.password);
    var user    = req.body.username;
    User.findOne({username:  user ,
                password: pass}).then(data => {
                    if(data == null){
                        res.status(200).send({mensagem: 'não encontrado'});
                    }else{
                        res.status(200).send(data);
                    }
        console.log(data);
    }).catch(e => {
        res.status(400).send({
            message: 'Erro ao buscar',
            data: e
        });
    });
}

exports.get = (req, res, next)=>{
    console.log("Entrou no get")
    var user    = req.params.username;
    User.findOne({username: user}).then(data => {
        res.status(200).send(data);
        console.log(data);
    }).catch(e => {
        res.status(400).send({
            message: 'Erro ao buscar',
            data: e
        });
    });
}
