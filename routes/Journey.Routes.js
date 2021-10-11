const express = require('express');
const router = express.Router();

const { addRestaurants, getRestaurants, addBeverrages, addEvents, getItems, getEvents } = require('../controllers/Journey.Controller');
const { isAuthenticatedUser, authorizeRoles } = require('../utils/authenticator')

//Add Journey
router.route('/addRestaurants').post(addRestaurants);

//Add Journey
router.route('/addBeverrages').post(addBeverrages);

//Add Journey
router.route('/getRestaurants').get(getRestaurants);

//Add Journey
router.route('/addEvents').post(addEvents);

//Add Journey
router.route('/getItems').get(getItems);

//Add Journey
router.route('/getEvents').get(getEvents);
// //Add Journey
// router.route('/addjourney').post(addRoute);



module.exports = router;