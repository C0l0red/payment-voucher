require('dotenv').config();
require('./modules/config/database').connect();

const express = require('express');

const app = express();

const user = require('./modules/user/controllers');
const organization = require('./modules/organization/controllers');
const {errorLogger, errorResponder, invalidPathHandler} = require('./modules/middleware/errors');

app.use(express.json());
app.use('/users', user);
app.use('/organizations', organization);
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

module.exports = app;