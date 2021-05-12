const express = require('express');
const bodyParser = require('body-parser');
const publisher = require('./publisher/route');
const subscriber = require('./subscriber/route');

const [pub, sub] = [express(), express()];

pub.get('/', (req, res) => {
    res.send('<p>Hello Publisher</p>');
});

sub.get('/', (req, res) => {
    res.send('<p>Hello Subscriber</p>');
});

// parse application/json
pub.use(bodyParser.json());
sub.use(bodyParser.json());

pub.use('/', publisher);
sub.use('/', subscriber);

module.exports = {
    pub,
    sub
};
