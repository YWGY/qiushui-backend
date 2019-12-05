const mongoose = required('mongoose')

const schema = new mongoose.Schema({
    customename: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    roomname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    status:{
        type:String,
        required:true,
        enum:['processing', 'accepted', 'finished'],
        default:'processing'
    },
    checkin: {
        type: Date,
        required: true,
        default: Date.now
    },
    checkout: {
        type: Date,
        required: true,
        default: Date.now        

    },
    comment:{
        type:String,              
        default:''
    }
})

module.exports = mongoose.model('Order', schema);