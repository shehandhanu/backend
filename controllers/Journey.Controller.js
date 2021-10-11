const Journey = require('../models/Journey.Model')

//Add Orders   => api/v1/user/update
exports.getRestaurants = async (req, res) => {

    const getRestaurants = await Journey.find()
    const rest = getRestaurants[0]

    const Restaurants = rest.Restaurants

    res.status(200).json({
        success: true,
        Restaurants
    })

}

//Add Orders   => api/v1/user/update
exports.addRestaurants = async (req, res) => {

    const getItems = await Journey.find()
    const Items = getItems[0]

    const cart = await Journey.findOneAndUpdate({ _id: Items._id }, { $push: { Restaurants: [req.body] } })

    res.status(200).json({
        success: true,
        Items
    })

}

//Add Orders   => api/v1/user/update
exports.addBeverrages = async (req, res) => {

    const getItems = await Journey.find()
    const Items = getItems[0]

    const cart = await Journey.findOneAndUpdate({ _id: Items._id }, { $push: { "Items.Unique": [req.body] } })

    res.status(200).json({
        success: true,
        Items
    })

}

//Add Orders   => api/v1/user/update
exports.addEvents = async (req, res) => {

    const getItems = await Journey.find()
    const Items = getItems[0]

    const cart = await Journey.findOneAndUpdate({ _id: Items._id }, { $push: { Events: [req.body] } })

    res.status(200).json({
        success: true,
        Items
    })

}

exports.getItems = async (req, res) => {

    const getItems = await Journey.find()
    const Items = getItems[0]

    res.status(200).json({
        success: true,
        Items
    })
}

exports.getEvents = async (req, res) => {

    const getEvents = await Journey.find()
    const tEvents = getEvents[0]

    const Events = tEvents.Events

    res.status(200).json({
        success: true,
        Events
    })

}