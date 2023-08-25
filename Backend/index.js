const express = require('express');
const connection = require('./config/db')

const app = express();

app.listen((3001),async() =>{
    await connection()
    console.log("server is running on 3001");
})