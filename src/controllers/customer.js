const Customer = require('../models/customer');
const Order = require('../models/order');

async function addCustomer(req, res){
    const {customerid} = req.params;
    const {customername, prefername, email, phone, idnum} = req.body;

    const existingCustomer = await Customer.findById(customerid).exec();

    if(existingCustomer){
        return res.status(400).json('Duplicate customer id');
    }

    const customer = new Customer({
        customername, 
        prefername, 
        email, 
        phone, 
        idnum
    });
    await customer.save();
    return res.json(customer);
}

async function getAllCustomers(req, res){
    const customers = await Customer.findById().exec();
    return res.json(customers);
}

async function getCustomer(req, res){
    const customer = await Customer.findById(customer._id)
    .populate('orders', 'customername, roomname')
    .exec();

    if(!customer){
        return res.status(404).json('customer not found');
    }

    return res.json(customer);
}

async function updateCustomer(req, res){
    const {customerid} = req.params;
    const {customername, prefername, email, phone, idnum} = req.body;

    const newCustomer = await Customer.findByIdAndUpdate(
        customerid,
        {customername, prefername, email, phone, idnum},
        {new: true}
        ).exec();
        if(!customerid){
            return res.status(404).json('customer not found');
        }

        return res.json(newCustomer);
}

async function deleteCustomer(req, res){
    const {customerid} = req.params;
    const customer = await Customer.findByIdAndDelete(customerid).exec();

    if(!customer) {
        return res.status(404).json('customer not found');
    }

    return res.sendStatus(200);
}

module.exports = {
    addCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
};