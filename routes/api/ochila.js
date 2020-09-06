const express = require('express');
const router = express.Router();
const Products = require('../../models/Products');

// get all products on index page

router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Products.findById({ _id: req.params.id });
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
