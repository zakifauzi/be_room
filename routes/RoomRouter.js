import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";

import { CreateRoom, getRooms } from "../controllers/Rooms.js";

const routerroom = express.Router();

routerroom.get("/rooms", getRooms);
routerroom.post("/rooms", verifyToken, CreateRoom);
routerroom.patch("/rooms", verifyToken, CreateRoom);
routerroom.delete("/rooms", verifyToken, CreateRoom);

export default routerroom;
