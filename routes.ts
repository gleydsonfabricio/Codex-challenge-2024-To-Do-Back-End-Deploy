import express from "express";
import { registerUser, loginUser, updateProfile } from "./src/controllers/userController";
import { getUserTasks, addTask, changeTask, deleteTask } from "./src/controllers/taskController";
const route = express.Router();

route.post("/app/singup", registerUser);
route.post("/app/login", loginUser);
route.put("/app/editProfile/:id", updateProfile);

route.get("/app/getTasks/:id", getUserTasks )
route.post("/app/addTask/:id", addTask);
route.put("/app/updateStatusTask/:userId/:taskId", changeTask);
route.delete("/app/deleteTask/:userId/:taskId", deleteTask);

export default route;