import Rents from "../models/RentModel.js";
import Rooms from "../models/RoomModels.js";

export const createRent = async (req, res) => {
  const room = await Rooms.findOne({
    attributes: ["rental_price"],
    where: {
      id: req.body.room_id,
    },
  });
  const { date_start, date_end, bank } = req.body;
  try {
    let date_1 = new Date(date_start);
    let date_2 = new Date(date_end);
    let different = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(different / (1000 * 3600 * 24));
    await Rents.create({
      date_start: date_start,
      date_end: date_end,
      bank: bank,
      total_rent_price: TotalDays * room.rental_price,
      status: 0,
    });
    res.status(201).json({ msg: "berhasil melakukan transaksi" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
