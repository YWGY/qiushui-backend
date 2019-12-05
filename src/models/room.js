const mongoose = required('mongoose')

const schema = new mongoose.Schema({
    roomname: {
        type: String,
        required: true    
    },
    description: {
        type: String,
        default: ''
        //这里包括房型，早餐，细节描述等
    }
})

module.exports = mongoose.model('Room', schema);