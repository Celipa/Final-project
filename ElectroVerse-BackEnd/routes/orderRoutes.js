const express = require('express');
const router = express.Router();
const {
    getUserOrderById,
    createOrder,
    updateUserOrderById,
    deleteUserOrderById,
    getUserOrders,
    updateUserOrders,
    deleteUserOrders
} = require('../controllers/orderController');

router.get('/orders', getUserOrders);
router.get('/orders/:id', getUserOrderById);
router.post('/orders', createOrder);
router.put('/orders/:id', updateUserOrders);
router.patch('/orders/:id', updateUserOrderById);
router.delete('/orders/', deleteUserOrders);
router.delete('/orders:id', deleteUserOrderById)

module.exports = router;