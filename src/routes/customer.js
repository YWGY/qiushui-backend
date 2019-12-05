const express = require('express');
const {
    getAllCustomers,
    getCustomer,
    addCustomer,
    deleteCustomer
} = require('../controllers/customer');

const router = express.Router();

router.get('/:customerid', getCustomer);
router.get('/', getAllCustomers);
router.put('/:customerid', addCustomer);
router.delete('/:customerid', deleteCustomer);

module.exports = router;