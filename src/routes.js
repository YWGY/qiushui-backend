const express = require('express');
const accountRoute = require('./routes/account');
const authRoute = require('./routes/auth');
const customerRoute = require('./routes/customer');
const orderRoute = require('./routes/order');
const roomRoute = require('./routes/room');

const router = express.Router();

router.use('/account', accountRoute);
router.use('/auth', authRoute);
router.use('/customer', customerRoute);
router.use('/order', orderRoute);
router.use('/room', roomRoute);

module.exports = router;