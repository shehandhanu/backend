const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please Enter Your First Name'],
        maxLength: [30, 'Your First Name cannot exceed 30 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Please Enter Your Last Name'],
        maxLength: [30, 'Your Last Name cannot exceed 30 characters']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Your Password'],
        minLength: [5, 'Your Password must be longer than 5 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: true,
    },
    phoneNumber: {
        unique: true,
        type: Number,
        minLength: [10, 'Your Password must be longer than 5 characters'],
        maxLength: [30, 'Your Last Name cannot exceed 30 characters'],
        required: true,
    },
    orders: [
        {
            date: {
                type: String
            },
            time: {
                type: String
            },
            itemsName: {
                type: String
            },
            itemCount: {
                type: Number
            },
            itemPrice: {
                type: Number
            },
            itemImage: {
                type: String
            }

        }
    ],
    DeliveryAddress: [
        {
            Address: {
                type: String
            }
        }
    ],
    CreditCard: [
        {
            cardNumber: {
                type: String
            },
            cardHolderName: {
                type: String
            },
            expDate: {
                type: String
            },
            CVV: {
                type: String
            },
        }
    ],
    cart: [
        {
            itemImage: {
                type: String
            },
            ItemName: {
                type: String
            },
            ItemCount: {
                type: String
            },
            ItemPrice: {
                type: String
            }
        }
    ],

})

//Encript password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

//Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

//Return JWT Token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

module.exports = mongoose.model('User', userSchema)