const express = require('express');
const { subscribe, publish } = require('./handler');

const router = express.Router();

router.post('/subscribe/:topic', subscribe);

router.post('/publish/:topic', publish)

module.exports = router;
