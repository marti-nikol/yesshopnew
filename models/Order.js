const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  product: { type: Object },
  qty: { type: String, required: true },
  names: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = Order = mongoose.model('order', OrderSchema);
