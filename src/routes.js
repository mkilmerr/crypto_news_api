const express = require('express');
const router = new express.Router;
const Api = require('./controllers/getLatestNews');

router.get('/',Api.getLatestNews);

module.exports = router;