var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
var jobs = [
    "UI Developer"
    , "UX Designer"
    , "Fullstack Developer"
    , "Android Developer"
]
app.post('/register', function (req, res) {
    res.status(200).json({
        result: 'Welcome! , ' + req.body.name
        , token: 'asdfghjk1234567890vbnmjghhhmhy1257845gtghgfjgg'
    }).send();
});
app.get('/jobs', function (req, res) {
    console.log('request: ', req.headers.authorization);
    
    if(!req.headers.authorization){
        res.status(401).json({error: 'Not authorized'});
        return;
    }
    res.status(200).json(jobs).send();
    return;
})
app.listen(3000, function () {
    console.log('listening on localhost:3000');
});