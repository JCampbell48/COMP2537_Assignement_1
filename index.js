const express = require('express');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 3000;

const node_session_secret = 'ebe88584-0c95-4243-a844-117bbe30eedd';

app.use(session({ 
    secret: node_session_secret,
    saveUninitialized: false,
    resave: true
}
));



app.listen(port, () => {
    console.log("Node application listening on port: " + port);
});

