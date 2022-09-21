const express = require('express');

const notesTaker = require('./notes');

const app = express();

app.use('/notes', notesTaker);


module.exports = app;
