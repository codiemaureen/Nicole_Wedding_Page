const express = require('express');
const router = express.Router();
const wedController = require('../controllers/wedController');
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/', wedController.homePage);
router.get('/addresses', catchErrors(wedController.addresses));
router.get('/photos', wedController.photos);
router.get('/registry', wedController.registry);


module.exports = router;