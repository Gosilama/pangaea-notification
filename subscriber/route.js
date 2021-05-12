const express = require('express');

const router = express.Router();

router.post('/:path', (req, res) => {
    // print message as proof that subscriber is getting messages published from publisher server
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;
