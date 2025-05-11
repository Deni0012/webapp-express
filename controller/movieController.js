const connection = require('../data/movies_db');

function index(req, res) {

    res.send('Index movie');

};

function show(req, res) {

    res.send('Show movie');

};

module.exports = { index, show };