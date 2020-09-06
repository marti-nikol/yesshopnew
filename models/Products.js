const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  itemCode: { type: String, required: true },
  category: { type: String, required: true },
  imageHead: { type: String, required: true },
  imageOne: { type: String, required: false },
  imageTwo: { type: String, required: false },
  imageThree: { type: String, required: false },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  sold: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

module.exports = Product = mongoose.model('product', ProductSchema);
