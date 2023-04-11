const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/usuario');

const app=express();
const port=process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api',userRoutes);

//routes
app.get('/',(req,res)=>{
    res.send("Welcome");
});

//conección a mongodb atlas
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Conectado a MongoDB Atlas")).catch((error)=>console.log(error));

app.listen(port, () => console.log('server listening on port',port));