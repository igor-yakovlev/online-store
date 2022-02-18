const express = require('express');
const productRouter = require('./products/route');
const router = express.Router();

router.use('/products', productRouter);

module.exports = router;
