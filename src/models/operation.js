const mongoose = required('mongoose')

const schema = new mongoose.Schema({
    time: {
        type: Date,
        required: true
    },
    detail: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('Operation', schema);