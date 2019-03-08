PORT = 3000
const express = require('express');
const bodyParser = require('body-parser');
const random = require('random-name');
const giveJoke = require('give-me-a-joke');
const path = require('path')

var jokeHits = 0;
// const cors = require('cors');
// VAR IS BAD

// Set up the express app
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api/random-name', function (req, res) {
    // console.log("Random Name GET request made!")
    res.send({
        "first": random.first(),
        "last": random.last()
      })
});


app.post('/api/random-joke', function(req,res) {
    giveJoke.getCustomJoke(req.body.firstName,req.body.lastName, function(joke) {
        res.send({'joke' : joke});
        // console.log(req.body);
        })
    jokeHits += 1
})

app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
  });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/random-joke-count', function(req, res) {
    res.send({'jokeCount' : jokeHits});
});

