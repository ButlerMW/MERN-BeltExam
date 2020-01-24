const { Game }= require('../models/game.model');

module.exports.createGame = (req, res) => {
    const { name, score } = req.body;
    Game.create({
        name,
        score
    })
        .then(game => res.json(game))
        .catch(err => res.status(500).json(err));
}

module.exports.getAllGame = (req, res) => {
    const { name, score } = req.body;
    Game.find({})
        .then(game => res.json(game))
        .catch(err => res.json(err));
}

module.exports.deleteGame = (req, res) => {
    Game.findOneAndDelete({_id: req.params.id})
        .then(deletedGame => res.json(deletedGame))
        .catch(err => res.json(err));
}