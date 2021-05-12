const validUrl = require('valid-url');
const axios = require('axios');
const { subscriptions } = require('../db');

exports.subscribe = (req, res) => {
    const { topic } = req.params;

    if (!topic) res.status(400).send('Parameter topic is not defined');

    const { url } = req.body;

    if (!validUrl.isUri(url)) res.status(400).send('Invalid url passed in request body');

    subscriptions.insert({ url, topic });

    res.json({ url, topic });
}

exports.publish = (req, res) => {
    const { topic } = req.params;

    if (!topic) res.status(400).send('Parameter topic is not defined');

    const subscribers = subscriptions.find({ topic })

    if (subscribers.length === 0) res.sendStatus(200);

    subscribers.forEach(async subscriber => {
        await axios.post(subscriber.url, { topic, data: req.body });
    });

    res.sendStatus(200);
}
