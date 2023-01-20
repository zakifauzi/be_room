import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";

import { createRent } from "../controllers/Rents.js";

const routerrent = express.Router();

routerrent.post("/rents", verifyToken, createRent);

export default routerrent;
