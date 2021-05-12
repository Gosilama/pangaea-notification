const lokijs = require('lokijs');

exports.subscribe = (req, res) => {
    const { topic } = req.query;

    if (!topic) throw new Error('Parameter topic is not defined');

    const { url } = req.body;


}
