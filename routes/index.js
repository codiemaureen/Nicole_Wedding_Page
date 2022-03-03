const express = require('express');
const router = express.Router();
const wedController = require('../controllers/wedController');

router.get('/', wedController.homePage);

module.exports = router;