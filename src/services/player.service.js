const players = require("../models/player.model")


const addPlayerService = (player) => {
    players.push(player);
    return;
}

module.exports = {
    addPlayerService
}