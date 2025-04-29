const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true,
        trim: true
    },
    numberOfPlayer: {
        type: Number,
        required: true
    },
    gameDuration: {
        type: Number,
        required: true
    },
    platform: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;