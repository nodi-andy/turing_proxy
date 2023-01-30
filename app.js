
'use strict';

// [START gae_node_request_example]

import express from 'express';
import morgan from 'morgan';
import bodyparserpkg from 'body-parser';


const { urlencoded, json } = bodyparserpkg;
import routes from './routes/index.js'; // import the routes

const restapp = express();
restapp.use(urlencoded({ extended: false }));
restapp.use(json());
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

export default restapp;
