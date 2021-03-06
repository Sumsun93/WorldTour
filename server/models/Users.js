const mongoose = require('mongoose');

// Création du schéma pour les Users
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  userSocketId: { type: String, default: -1 },
  room_id: { type: String, default: -1 },
});

// Création du Model pour les Users
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
