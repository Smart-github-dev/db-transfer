const mongoose = require('mongoose');
module.exports = mongoose.model('currencies', new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        symbol: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        payment: {
            type: String
        },
        buyUrl: {
            type: String
        },
        coingecko: {
            type: String
        },
        price: {
            type: Number,
            default: 0
        },
        minDeposit: {
            type: Number,
            default: 0
        },
        minWithdraw: {
            type: Number,
            default: 0
        },
        minBet: {
            type: Number,
            default: 0
        },
        maxBet: {
            type: Number,
            default: 0
        },
        decimals: {
            type: Number,
            default: 18
        },
        betLimit: {
            type: Number,
            default: 0
        },
        adminAddress: {
            type: String,
            default: ''
        },
        contractAddress: {
            type: String,
            default: ''
        },
        network: {
            type: String,
            default: ''
        },
        abi: {
            type: Array,
            default: []
        },
        type: {
            type: Number,
            required: true
        },
        status: {
            type: Boolean,
            default: true
        },
        deposit: {
            type: Boolean,
            default: true
        },
        withdrawal: {
            type: Boolean,
            default: true
        },
        order: {
            type: Number
        },
        officialLink: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
));