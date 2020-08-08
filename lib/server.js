'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routs/api-v1');
const timestamp = require('../middleeware/timestamp');
const loggerReq = require('../middleeware/logger.js');
const serverError = require('../middleeware/500.js');
const notFound = require('../middleeware/404.js');
const signup = require('../lib/auth/router');
const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', apiRouter);
app.use(timestamp);
app.use(loggerReq);
app.use(signup);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the main route');
});



app.use(notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`listining on ${PORT}`));
  },
};