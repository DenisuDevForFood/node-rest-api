const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    price: {type: Number, default: 0},
    productImage: String
});

module.exports = mongoose.model('Product', productSchema);
