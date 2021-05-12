const loki = require('lokijs');

const db = new loki('notification');
exports.subscriptions = db.addCollection('subscriptions', { indices: ['topic'] });

