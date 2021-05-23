//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
require('dotenv/config');

//instantiations
const app = express();


//Models


//Configurations
app.use(express.static(path.join(__dirname, 'public')));

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Database connection
mongoose.connect(process.env.dataUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',(err) =>{
    console.log(err);
});
db.once('open',() =>{
    console.log( `Database is open`);
})


//Server
app.listen(process.env.PORT,() =>{
    console.log(`Server running on port ${process.env.PORT}`);
})