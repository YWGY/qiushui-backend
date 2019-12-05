const express = require('express');
const {
    addUser
} = require('../controllers/account');

const router = express.Router();

router.post('/', addUser);


module.exports = router;