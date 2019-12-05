const express = require('express');
const {
    addRoom,
    getAllRooms,
    getRoom,
    updateRoom,
    deleteRoom
} = require('../controllers/room');

const router = express.Router();

router.get('/:roomid', getRoom);
router.get('/', getAllRooms);
router.post('/', addRoom);
router.put('/roomid', updateRoom);
router.delete('roomid', deleteRoom);

module.exports = router;