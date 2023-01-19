import expres from "express";
import {
  deleteUser,
  getUsers,
  getUsersById,
  Login,
  Logout,
  Register,
  updateUser,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = expres.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUsersById);
router.patch("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
