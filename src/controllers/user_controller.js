'use strict'

exports.post = (req, res, next)=>{
    console.log("entrou aqui post");
    res.status(201).send(req.bady);
}

exports.put = (req, res, next)=>{
    const id = req.params.id;
    console.log("entrou put");
    res.status(201).send({
        id: id,
        user: req.bady
    });
}

exports.delete = (req, res, next)=>{
    const id = req.params.id;
    console.log("entrou deletar");
}

