const Customer = require('../models/customer');
const Room = require('../models/room');

async function addOrder(req, res) {
    const {customername, roomname, status, comment} = req.body;

    const order = new Order({
        customername, roomname, checkin, checkout, status, comment
    });
    await order.save();
    const customer = await Customer.findById(customername).exec();
    const room = await Room.findById(roomname).exec();

    customer.oreders.addToSet(order._id);
    room.orders.addToSet(order._id);
    await customer.save();
    await room.save();
    return res.json(order);
}

async function getAllOrders(req, res){
    const orders = await Order.find().exec();

    return res.json(orders);
}

async function getOrder(req, res){
    const {orderid} = req.params;

    const order = await Order.findById(orderid)
    .populate('customer', 'customername')
    .populate('room', 'roomname')
    .exec();

    if(!order){
        return res.status(404).json('order not found');
    }
}

async function updateOrder(req, res) {
    const {orderid} = req.params;
    const {customername, roomname, checkin, checkout, status, comment} = req.body;

    const newOrder = await Order.findByIdAndUpdate(
        orderid,
        {customername, roomname, checkin, checkout, status, comment},
        {new: true}
    ).exec();
    if(!newOrder){
        return res.status(404).json('order not found');
    }

    return res.json(newOrder);
}

async function deleteOrder(req, res){
    const {orderid} = req.params;
    const order = await Order.findByIdAndDelete(orderid).exec();

    if(!order) {
        return res.status(404).json('order not found');
    }

    const customer = await Customer.findById(order.customername).exec();
    const room = await Room.findById(order.roomname).exec();
    customer.orders.pull(order._id);
    room.orders.pull(order._id);
    await customer.save();
    await room.save();
    return res.sendStatus(200);
}

module.exports = {
    addOrder,
    getAllOrders,
    getOrder,
    updateOrder,
    deleteOrder,
};
