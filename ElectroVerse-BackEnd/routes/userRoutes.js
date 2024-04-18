const express = require('express');
const {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUsers,
  updateUserProfile,
  getUserById,
  deleteUserProfile
} = require('../controllers/userController');


console.log(registerUser, loginUser, getUserProfile, updateUserProfile);
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.get('/profile/:id', getUserProfile);
router.put('/profile', updateUserProfile);
router.delete('/profile', deleteUserProfile);

module.exports = router;


