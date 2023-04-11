const express = require('express');
const usuarioSchema = require('../models/usuario');

const router=express.Router();

//crear usuario
router.post('/usuarios', (req,res)=>{
    const usuario = usuarioSchema(req.body);
    usuario
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//obtener todos los usuarios
router.get('/usuarios', (req,res)=>{
    usuarioSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports = router;