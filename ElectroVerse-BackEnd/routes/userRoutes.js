// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.post('/register', userController.register);
// router.post('/login', userController.login);
// router.get('/users', userController.getUsers);

// module.exports = router;


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


// --------------------------Code Worked-----------------------------------

// const express = require('express');
// const {
//   registerUser,
//   loginUser,
//   getUserProfile,
//   getUsers,
//   // updateUserProfile,
//   // getUserById
// } = require('../controllers/userController');
// console.log(registerUser, loginUser);
// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/users', getUsers);
// // router.get('/users/:id', getUserById);
// // router.put('/profile', updateUserProfile);

// module.exports = router;
