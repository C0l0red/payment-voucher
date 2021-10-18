require('dotenv').config();
require('./modules/config/database').connect();

const express = require('express');

const app = express();

module.exports = app;