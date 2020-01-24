const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extedned: true}));
require('./server/routes/trivia.routes')(app);
require('./server/routes/game.routes')(app);

app.listen(8000, () => {
    console.log("Listening at port 8000")
});

const io = require("socket.io")(server);

// io.on("message_from_client", mewMessage => {
//     console.log(newMessage);
//     io.emit("send_new_message_to_all", newMessage)  /// add this later
// })