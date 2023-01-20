import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";

import {
  CreateRoom,
  deleteRoom,
  getRoomById,
  getRooms,
  updateRoom,
} from "../controllers/Rooms.js";

const routerroom = express.Router();

routerroom.get("/rooms", getRooms);
routerroom.post("/rooms", verifyToken, CreateRoom);
routerroom.get("/rooms/:id", verifyToken, getRoomById);
routerroom.patch("/rooms/:id", verifyToken, updateRoom);
routerroom.delete("/rooms/:id", verifyToken, deleteRoom);

export default routerroom;
