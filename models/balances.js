const mongoose = require('mongoose');

module.exports = mongoose.model('balances', new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users'
        },
        currency: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'currencies'
        },
        balance: {
            type: Number,
            default: 0,
            required: true
        },
        prev_balance: {
            type: Number,
            default: 0,
            required: true
        },
        //the payment filed of the currencies table
        symbol: {
            type: String,
        },
        status: {
            type: Boolean,
            default: true,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    { timestamps: true }
));