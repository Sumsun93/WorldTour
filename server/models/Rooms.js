const mongoose = require('mongoose');

const { Schema } = mongoose;

// Création du schéma pour les Rooms
const RoomSchema = new Schema({
  name: { type: String },
  users: [{
    socket: String,
    pseudo: String,
    money: Number,
  }],
  open: { type: Boolean },
});

// Création du Model pour les Rooms
const RoomModel = mongoose.model('rooms', RoomSchema);

module.exports = RoomModel;
