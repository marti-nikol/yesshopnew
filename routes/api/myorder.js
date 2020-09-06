const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');

// get current product of myorder
router.get('/:id', async (req, res) => {
  try {
    const product = await Order.findById({ _id: req.params.id });
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
