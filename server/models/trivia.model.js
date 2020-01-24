const mongoose = require('mongoose');

const TriviaSchema = new mongoose.Schema({
    question: {type: String,
        required: [true, "Must insert a question"],
        minlength: [15, "Question must have at least 15 characters"]
    },
    answer: {type: String,
        required: [true, "All answers must be filled"]
    },
    fake1: {type: String,
        required: [true, "All answers must be filled"]
    },
    fake2: {type: String,
        required: [true, "All answers must be filled"]
    }
}, { timestamps: true});
module.exports.Trivia = mongoose.model('Trivia', TriviaSchema);