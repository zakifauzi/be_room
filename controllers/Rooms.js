import Rooms from "../models/RoomModels.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.findAll({
      attributes: ["id", "room_name", "rental_price", "address"],
    });
    res.status(200).json(rooms, { msg: "berhasil mendapatkan data rooms" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const rooms = await Rooms.findOne({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json(rooms, { msg: "berhasil mendapatkan data rooms by id" });
  } catch (error) {
    console.log(console.log(res.status(500).json({ msg: error.message })));
  }
};

export const CreateRoom = async (req, res) => {
  const { room_name, capacity, hotel_name, rental_price, address, userID } =
    req.body;
  try {
    await Rooms.create({
      room_name: room_name,
      capacity: capacity,
      hotel_name: hotel_name,
      rental_price: rental_price,
      address: address,
      userID: userID,
    });
    res.status(201).json({ msg: "Berhasil Menambahkan Room" });
  } catch (error) {
    res.status(400).json({ msg: "Input Salah" });
  }
};

export const updateRoom = async (req, res) => {
  const room = await Rooms.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!room) return res.status(404).json({ msg: "Room tidak ditemukan" });
  const {
    room_name,
    capacity,
    hotel_name,
    rental_price,
    address,
    date_available,
  } = req.body;
  try {
    await Rooms.update(
      {
        room_name: room_name,
        capacity: capacity,
        hotel_name: hotel_name,
        rental_price: rental_price,
        address: address,
        date_available: date_available,
      },
      {
        where: {
          id: room.id,
        },
      }
    );
    res.status(200).json({ msg: "data room berhasil diupdated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteRoom = async (req, res) => {
  const room = await Rooms.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!room) return res.status(404).json({ msg: "Room tidak ditemukan" });
  try {
    await Rooms.destroy({
      where: {
        id: room.id,
      },
    });
    res.status(200).json({ msg: "Berhasil melakukan delete room" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
