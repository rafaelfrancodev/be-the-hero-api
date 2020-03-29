// receive library express
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes/routes');

// init application
const app = express();

// before all requests, express convert json in object in bode request
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// listen application in port 3333
module.exports = app;