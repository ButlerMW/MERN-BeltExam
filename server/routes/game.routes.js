const GameController = require("../controllers/game.controller");
module.exports = function(app){
    app.post('/api/game/new', GameController.createGame);
    app.get('/api/game', GameController.getAllGame);
    app.delete('/api/game/delete/:id', GameController.deleteGame);
}