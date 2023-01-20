import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "./config/env.js";
import userrouter from "./routes/UserRouter.js";
import routerRoom from "./routes/RoomRouter.js";
import routerrent from "./routes/RentRouter.js";

const app = express();

// try {
//   await db.authenticate();
//   console.log("server runnning");
//   // await sequelizemeta.drop();
// } catch (error) {
//   console.log(error);
// }

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(userrouter);
app.use(routerRoom);
app.use(routerrent);

app.listen(5000, () => console.log("server running port 5000"));
