const express = require('express');
// const {cats }= require(../)
// const path = require('path');
const app = express();


app.use('/cats', require('./controllers/cats'));
// app.use('/', (req, res) => {
//   res.send('hello world!');
// });

module.exports = app;
