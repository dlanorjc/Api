const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')


const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://ronaldjc:lalado@cluster0.jp6oq.gcp.mongodb.net/Users?retryWrites=true&w=majority', {
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser: true
});

requireDir('./src/Model');

app.use('/', require('./src/router'))
app.listen(3333)