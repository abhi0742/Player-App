const express = require('express');
const playerRouter = require("./src/routes/player.route")

const app = express();
app.use(express.json());
app.use(playerRouter)


app.listen(3000, (req, res) => {

    console.log("Server listening on port 3000");

})