const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  products: [
    {
      productId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true 
    },
      quantity: {
         type: Number, 
         required: true 
        }
    }
  ],
  total: {
    type: Number,
    required: true,
  },
  // Add other order fields here
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


