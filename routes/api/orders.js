const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Order = require('../../models/Order');

// order post form
router.post(
  '/',
  [
    check('names', 'Имена е задължително поле!').not().isEmpty(),
    check('address', 'Адрес е задължително поле!').not().isEmpty(),
    check('mobile', 'Мобилен номер е задължително поле!').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { product, qty, names, mobile, address } = req.body;

    try {
      const productOrder = new Order({ product, qty, names, mobile, address });

      await productOrder.save();
      res.json(productOrder);
    } catch (error) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
