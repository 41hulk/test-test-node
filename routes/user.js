import express from "express";
import {
  register,
  find,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.post("/register", register);
router.get("/findusers", find);
router.delete("/deleteuser/:userId", deleteUser);
router.patch("/updateuser/:userId", updateUser);

export default router;
