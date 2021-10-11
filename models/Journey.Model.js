const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
    Restaurants: [
        {
            restaurantName: {
                type: String
            },
            restaurantPhone: {
                type: String
            },
            restaurantAddress: {
                type: String
            },
            restaurantPickUpRange: {
                type: String
            },
            restaurantLogo: {
                type: String
            },
        }
    ],
    Items:
    {
        Beverrages: [
            {
                itemName: {
                    type: String
                },
                itemPrice: {
                    type: String
                },
                itemImage: {
                    type: String
                },
            }
        ],
        Bites: [
            {
                itemName: {
                    type: String
                },
                itemPrice: {
                    type: String
                },
                itemImage: {
                    type: String
                },
            }
        ],
        Mains: [
            {
                itemName: {
                    type: String
                },
                itemPrice: {
                    type: String
                },
                itemImage: {
                    type: String
                },
            }
        ],
        Unique: [
            {
                itemName: {
                    type: String
                },
                itemPrice: {
                    type: String
                },
                itemImage: {
                    type: String
                },
            }
        ],
    },
    Events: [
        {
            eventImage: {
                type: String
            },
            eventTitle: {
                type: String
            },
            eventDescription: {
                type: String
            },
        }
    ],

})

module.exports = mongoose.model('Journey', journeySchema)