const express = require('express');
const router = express.Router();

const { registerUser,
    loginUser,
    getUserProfile,
    logout,
    updateProfile,
    addDeliveryAddress, addOrders, addcart, addCreditCard, getDeliveryAddress, getOrders, getcart, getCreditCard } = require('../controllers/User.Controller');
const { isAuthenticatedUser, authorizeRoles } = require('../utils/authenticator')

//Register User
router.route('/signup').post(registerUser);

//Login 
router.route('/signin').post(loginUser);

//Logout
router.route('/logout').get(logout)

//Get User Profile
router.route('/profile').get(isAuthenticatedUser, getUserProfile);

//Update User Profile
router.route('/profileupdate').put(isAuthenticatedUser, updateProfile);


//Add  
router.route('/addDeliveryAddress').post(addDeliveryAddress);

//Add  
router.route('/addOrders').post(addOrders);

//Add  
router.route('/addCreditCard').post(addCreditCard);

//Add  
router.route('/addcart').post(addcart);

//GET  
router.route('/getDeliveryAddress').get(getDeliveryAddress);

//GET  
router.route('/getOrders').get(getOrders);

//GET  
router.route('/getcart').get(getcart);

//GET  
router.route('/getCreditCard').get(getCreditCard);


module.exports = router;