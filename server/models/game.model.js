const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: {type: String},
    score: {type: Number}
}, { timestamps: true});
module.exports.Game = mongoose.model('Game', GameSchema);