const express = require('express');
const Product = require('./product');
const router = express.Router();

router.get('/', async (req, res, next) => {
    const {name, price, cpu} = req.query;
    let filter = {};

    if (name)
        filter.name = name;

    if (price) {
        const [from, to] = price.split('|');
        filter['params.price'] = {$gt: from, $lt: to};
    }

    if (cpu)
        filter['params.cpu'] = cpu;

    const products = await Product.find(filter);

    res.json(products)
})

router.post('/', async (req, res, next) => {
    const {name, description, params: {price, cpu}} = req.body;

    const product = new Product({
        name,
        description,
        params: {
            price: +price,
            cpu
        }
    })

    await product.save();

    res.json(product);
})


module.exports = router;
