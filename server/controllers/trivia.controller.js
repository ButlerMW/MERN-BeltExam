const { Trivia }= require('../models/trivia.model');

module.exports.createTrivia = (req, res) => {
    const { question, answer, fake1, fake2 } = req.body;
    Trivia.create({
        question,
        answer,
        fake1,
        fake2
    })
        .then(trivia => res.json(trivia))
        .catch(err => res.status(500).json(err));
}

module.exports.getAllTrivia = (req, res) => {
    Trivia.find({})
        .then(trivia => res.json(trivia))
        .catch(err => res.json(err));
}

module.exports.getTrivia = (req, res) => {
    Trivia.findOne({_id: req.params.id})
        .then(trivia => res.json(trivia))
        .catch(err => res.json(err));
}

module.exports.updateTrivia = (req, res) => {
    Trivia.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
        .then(updatedTrivia => res.json(updatedTrivia))
        .catch(err => res.status(500).json(err));
}

module.exports.deleteTrivia = (req, res) => {
    Trivia.findOneAndDelete({_id: req.params.id})
        .then(deletedtrivia => res.json(deletedtrivia))
        .catch(err => res.json(err));
}

