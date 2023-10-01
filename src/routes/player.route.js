const express = require("express");
const { getAllPlayer, addAPlayer, UpdateAPlayer, DeleteAPlayer } = require("../controllers/player.controller");

const playerRouter = express.Router();

//Get all players

playerRouter.get("/players", getAllPlayer)

//Add players

playerRouter.post("/players", addAPlayer)

// update a players

playerRouter.put("/players/:id", UpdateAPlayer)

//delete a players

playerRouter.delete("/players/:id", DeleteAPlayer)

module.exports = playerRouter;

