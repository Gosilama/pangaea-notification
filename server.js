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
pub.use(bodyParser.json({ limit: '50mb' }));
sub.use(bodyParser.json({ limit: '50mb' }));

pub.use('/', publisher);
sub.use('/', subscriber);

pub.listen(8000, () => {
    console.log('Publisher running on port 8000');
});

sub.listen(9000, () => {
    console.log('Subscriber running on port 9000');
});
