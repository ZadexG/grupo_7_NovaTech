const express = require('express');

const mainController = require('../controllers/mainControllers');

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);
router.get('/register', mainController.register);
router.get('/product-Detail', mainController.productDetail);

module.exports = router;