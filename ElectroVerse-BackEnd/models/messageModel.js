// messagesModel.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;