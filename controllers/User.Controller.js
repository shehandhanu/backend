const User = require('../models/User.Model')
const Journey = require('../models/Journey.Model')

const sendToken = require('../utils/jwtToken');

//Register User   => /api/v1/signup
exports.registerUser = async (req, res, next) => {

    const user = await User.create(req.body)

    if (!user) {
        res.status(201).json({
            success: false
        })
    }

    const ruser = await sendToken(user)

    let token = ruser.token;
    let option = ruser.option;

    const data = {
        token,
        user
    }

    res.status(200).cookie('token', token, option).json({
        success: true,
        token,
        user
    })

}

//Login User
exports.loginUser = async (req, res, next) => {

    const { phoneNumber, password } = req.body;

    if (!phoneNumber || !password) {
        return res.status(204).json({
            success: false,
            message: 'Email Or Password Empty'
        })
    }

    //finding user in data bsae
    const user = await User.findOne({ phoneNumber }).select('+password');

    if (!user) {
        res.status(401).json({
            success: false,
            message: 'Invalid Email Or Password'
        })
    }

    //checks password is correct 
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        res.status(401).json({
            success: false,
            message: 'Wrong Email Or Password'
        })
    }

    const tokendata = await sendToken(user);

    const token = tokendata.token
    const option = tokendata.option

    res.status(200).cookie('token', token, option).json({
        success: true,
        token,
        user
    })
}

//update user profile   => api/v1/user/update
exports.updateProfile = async (req, res) => {

    //update avater TODO
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })

}

//get current user  => /api/v1/user
exports.getUserProfile = async (req, res, next) => {

    let user = await User.findOne({ _id: req.user.id })

    if (!user) {
        return res.status(401).json({
            success: false,
            user: [],
            message: 'User Not Found'
        })
    }

    res.status(200).json({
        success: true,
        user
    })
}

//logout user => /api/v1/logout
exports.logout = async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'logged out'
    })
}

//Add Orders   => api/v1/user/update
exports.getOrders = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const orders = user.orders

    res.status(200).json({
        success: true,
        orders
    })

}

//Add Orders   => api/v1/user/update
exports.addOrders = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const order = await User.findOneAndUpdate({ _id: user._id }, { $push: { orders: [req.body] } })

    res.status(200).json({
        success: true,
        order
    })

}

//Add Orders   => api/v1/user/update
exports.getDeliveryAddress = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const DeliveryAddress = user.DeliveryAddress

    res.status(200).json({
        success: true,
        DeliveryAddress
    })

}

//Add Orders   => api/v1/user/update
exports.addDeliveryAddress = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const DeliveryAddress = await User.findOneAndUpdate({ _id: user._id }, { $push: { DeliveryAddress: [req.body] } })

    res.status(200).json({
        success: true,
        DeliveryAddress
    })

}


//Add Orders   => api/v1/user/update
exports.getCreditCard = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const CreditCard = user.CreditCard

    res.status(200).json({
        success: true,
        CreditCard
    })

}

//Add Orders   => api/v1/user/update
exports.addCreditCard = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const CreditCard = await User.findOneAndUpdate({ _id: user._id }, { $push: { CreditCard: [req.body] } })

    res.status(200).json({
        success: true,
        CreditCard
    })

}

//Add Orders   => api/v1/user/update
exports.getcart = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const cart = user.cart

    res.status(200).json({
        success: true,
        cart
    })

}

//Add Orders   => api/v1/user/update
exports.addcart = async (req, res) => {

    const getuser = await User.find()
    const user = getuser[0]

    const cart = await User.findOneAndUpdate({ _id: user._id }, { $push: { cart: [req.body] } })

    res.status(200).json({
        success: true,
        cart
    })

}