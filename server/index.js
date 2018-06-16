/*
 * Require
 */
const express = require('express');
const { Server } = require('http');
const mongoose = require('mongoose');
const socket = require('socket.io');
const RoomModel = require('./models/Rooms');
// const bodyParser = require('body-parser');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);

/*
. Routes pour axios
*/

// // On utilise body-parser pour avoir les info de POST et GET
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });


/**
 * MongoDB
 */

// Connexion a MongoDB sur la DB "matefinder"
mongoose.connect('mongodb://localhost/worldtour', (err) => {
  if (err) {
    throw err;
  }
});


/**
 * Socket.io
 */
io.on('connection', (socket) => {
  console.log('Connected !');
  console.log(socket.id);

  socket.on('create_room', ({ pseudo }) => {
    const room = new RoomModel();
    room.name = `partie de ${pseudo}`;
    room.users = [
      {
        socket: socket.id,
        pseudo,
        money: 2000000,
      },
    ];
    room.open = true;

    room.save((err, datas) => {
      if (err) throw err;
      else {
        console.log(socket.emit);
        socket.emit('test', datas);
      }
    });
  });
});

/*
 * Server
 */
server.listen(3000, () => {
  console.log('listening on *:3000');
});
