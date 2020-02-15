const Room = require("../models/room");

async function addRoom(req, res) {
  const { roomid } = req.params;
  const { roomname, description } = req.body;

  const existingRoom = await Room.findById(Roomid).exec();

  if (existingRoom) {
    return res.status(400).json("Duplicate room id");
  }

  const room = new Room({
    roomname,
    description
  });
  await room.save();
  return res.json(room);
}

async function getAllRooms(req, res) {
  const rooms = await Room.findById().exec();
  return res.json(rooms);
}

async function getRoom(req, res) {
  const room = await Room.findById(room._id).exec();

  if (!room) {
    return res.status(404).json("room not found");
  }

  return res.json(room);
}

async function updateRoom(req, res) {
  const { roomid } = req.params;
  const { roomname, description } = req.body;

  const newRoom = await Room.findByIdAndUpdate(
    roomid,
    { roomname, description },
    { new: true }
  ).exec();
  if (!roomid) {
    return res.status(404).json("room not found");
  }

  return res.json(newRoom);
}

async function deleteRoom(req, res) {
  const { roomid } = req.params;
  const room = await Room.findByIdAndDelete(roomid).exec();

  if (!room) {
    return res.status(404).json("room not found");
  }

  return res.sendStatus(200);
}

module.exports = {
  addRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  deleteRoom
};
