// Setup basic express server
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io'
import morgan from 'morgan';
import bodyparserpkg from 'body-parser'

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT || 8080;

//TBD
import * as openai_controller from "./controllers/openai_controller.js";

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static('public'));

// API
import routes from './routes/index.js'; // import the routes
const { urlencoded, json } = bodyparserpkg;
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/', routes); //to use the routes

// Chatroom

let numUsers = 0;

function sendToAll(msg) {
    console.log(JSON.stringify(msg));
    
    io.emit('new message', {
        username: 'AI',
        message: msg.message
      })
}

function socketRoot(socket) {
  let addedUser = false;
  

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    openai_controller.chat({query: {user: socket.username, msg: data}}, sendToAll)
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (username) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
}

io.on('connection', socketRoot);



