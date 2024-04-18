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


// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     _id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product',
//         required: true
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     products: [{
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true,
//         enum: ['TV', 'Laptop', 'Phones', 'Vacuum Cleaners']
//     },
//     images: {
//         type: [String],
//         required: true
//     }
// }
// ],
// },
// {
//     timestamps: true
// })

// const order = mongoose.model('order', orderSchema);

// module.exports = order;