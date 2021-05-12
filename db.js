const loki = require('lokijs');

const db = process.env.NODE_ENV === 'test' ? new loki('test_notification') : new loki('notification');
exports.subscriptions = db.addCollection('subscriptions', { indices: ['topic'] });
