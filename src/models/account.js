const mongoose = require('mongoose') 

const schema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

schema.methods.hashPassword = async function() {
    this.password = await bycrpt.hash(this.password, 10);
    console.log(this.password);
};

schema.methods.validatePassword = async function(password) {
    const validatePassword = await bycrpt.compare(password, this.password);
    return validatePassword;
}

module.exports = mongoose.model('Account', schema);