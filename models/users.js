const mongoose = require('mongoose');

module.exports = mongoose.model('users', new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    emailverify: {
        type: Boolean,
        default: false
    },
    emailVerifyCode: {
        type: Number,
    },
    password: {
        type: String,
    },
    username: {
        type: String,
    },
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    permissionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'permissions'
    },
    oddsformat: {
        type: String,
        default: 'decimal'
    },
    mobile: {
        type: String
    },
    cryptoAccount: {
        type: String,
        default: ''
    },
    publicAddress: {
        type: String,
        default: ''
    },
    nonce: {
        type: Number
    },
    avatar: {
        type: String,
        default: ''
    },
    ip: {
        type: String
    },
    country: {
        type: String
    },
    iReferral: {
        type: String
    },
    rReferral: {
        type: String
    },
    rBonus: {
        type: Number,
        default: 0
    },
    rNumber: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roles'
    }
},
    { timestamps: true }));
