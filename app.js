
'use strict';

// [START gae_node_request_example]

import express from 'express';
import morgan from 'morgan';
import bodyparserpkg from 'body-parser';


const { urlencoded, json } = bodyparserpkg;
import routes from './routes/index.js'; // import the routes

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/', routes); //to use the routes


// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log(`REST API listening on port ${PORT}`);
  });
// [END gae_node_request_example]

export default app;
