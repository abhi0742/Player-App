const players = require("../models/player.model")

const { addPlayerService } = require("../services/player.service")

function getAllPlayer(req, res) {
    return res.json({ response: players })
}

function addAPlayer(req, res) {

    const player = req.body;

    //players.push(player);

    // wrire buisness logic in service layer
    addPlayerService(player);

    // console.log(players);
    return res.json({ message: "player added successfully" })
}

function getAPlayerByID(req, res) {
    return res.json({ message: "get player by id" })
}

function UpdateAPlayer(req, res) {
    return res.json({ message: "update a player successfully" })
}
function DeleteAPlayer(req, res) {
    return res.json({ message: "delete a player successfully" })
}

module.exports = {
    getAllPlayer,
    addAPlayer,
    getAPlayerByID,
    UpdateAPlayer,
    DeleteAPlayer,


}