
'use strict';

// [START gae_node_request_example]
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./standard/routes/index.js'); // import the routes

const restapp = express();
restapp.use(bodyParser.urlencoded({ extended: false }));
restapp.use(bodyParser.json());
restapp.use(morgan('dev'));

restapp.use('/', routes); //to use the routes
/*
const webapp = express();

webapp.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
webapp.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});*/


// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
restapp.listen(PORT, () => {
    console.log(`REST API listening on port ${PORT}`);
  });
// [END gae_node_request_example]

module.exports = restapp;
