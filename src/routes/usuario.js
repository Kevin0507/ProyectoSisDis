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

//obtener un usuario
router.get('/usuarios/:id', (req,res)=>{
    const { id } = req.params;
    usuarioSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//actualizar un usuario
router.put('/usuarios/:id', (req,res)=>{
    const { id } = req.params;
    const { name,age,email } = req.body;
    usuarioSchema
    .updateOne({ _id:id },{ $set: { name,age,email } } )
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//eliminar un usuario
router.delete('/usuarios/:id', (req,res)=>{
    const { id } = req.params;
    usuarioSchema
    .findByIdAndRemove(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports = router;