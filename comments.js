// create web server

// import modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create an express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/comments', { useNewUrlParser: true });

// use body-parser middleware
app.use(bodyParser.json());

// use routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('listening for requests');
});