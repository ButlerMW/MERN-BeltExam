const TriviaController = require("../controllers/trivia.controller");
module.exports = function(app){
    app.post('/api/trivia/new', TriviaController.createTrivia);
    app.get('/api/trivia', TriviaController.getAllTrivia);
    app.get('/api/trivia/:id', TriviaController.getTrivia); //add
    app.put('/api/trivia/edit/:id', TriviaController.updateTrivia); //add
    app.delete('/api/trivia/delete/:id', TriviaController.deleteTrivia); //add
}