'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect('mongodb://localhost:27017/lab09', mongooseOptions);

require('./src/app.js').start(3000);
