const express = require('express');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 3020;

const node_session_secret = 'ebe88584-0c95-4243-a844-117bbe30eedd';

app.use(session({ 
    secret: node_session_secret,
    saveUninitialized: false,
    resave: true
}
));

var numPageHits = 0;

app.get('/', (req, res) => {
    req.session.numPageHits;
    numPageHits++;
    res.send('you have visited this page ' + numPageHits + ' times');
});

app.listen(port, () => {
    console.log("Node application listening on port: " + port);
});

