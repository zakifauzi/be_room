import Rooms from "../models/RoomModels.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.findAll({
      attributes: ["id", "room_name", "rental_price", "address"],
    });
    res.json(rooms);
  } catch (error) {
    console.log(error);
  }
};

export const getRoomById = async (req, res) => {
  try {
    const rooms = await Rooms.findOne({
      attributes: ["id", "room_name", "rental_price", "address"],
      where: {
        id: req.params.id,
      },
    });
    res.json(rooms);
  } catch (error) {
    console.log(error);
  }
};

export const CreateRoom = async (req, res) => {
  const { room_name, capacity, hotel_name, rental_price, address } = req.body;
  try {
    await Rooms.create({
      room_name: room_name,
      capacity: capacity,
      hotel_name: hotel_name,
      rental_price: rental_price,
      address: address,
    });
    res.status(201).json({ msg: "Berhasil Menambahkan Room" });
  } catch (error) {}
};

// export const updateRoom = async (req, res) => {
//   const room = await Rooms.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if (!room) return res.status(404).json({ msg: "Room tidak ditemukan" });
//   const { name, email, address, phone } = req.body;
//   try {
//     await Rooms.update(
//       {
//         name: name,
//         email: email,
//         address: address,
//         phone: phone,
//       },
//       {
//         where: {
//           id: user.id,
//         },
//       }
//     );
//     res.status(200).json({ msg: "User Updated" });
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };

// export const deleteUser = async (req, res) => {
//   const room = await Users.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
//   try {
//     await Users.destroy({
//       where: {
//         id: user.id,
//       },
//     });
//     res.status(200).json({ msg: "room Deleted" });
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };
