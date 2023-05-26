const express = require('express');
const morgan = require('morgan');
const routes = require('../src/routes')



const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(routes) 


module.exports= app;