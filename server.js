'use strict';
const express = require('express');
const routes = require('./routes/routes')


const port = 3000;
const app = express();
app.listen(port);
app.use(routes);
console.log('Message RESTful API server started on: ' + port);