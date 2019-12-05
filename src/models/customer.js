const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    customername: {
        type: Number,
        required: true
    },
    prefername: {
        type: String,
        default:''
    },
    email: {
        type: String,
        default:''
        //email这里不确定
    },
    phone: {
        type: Number,
        required: true
    },
    idnum: {
        string: Number,
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.objectId,
        ref: 'Order',
    }]
})

module.exports = mongoose.model('Customer', schema);