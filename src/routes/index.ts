import { auth } from "./../middlewares/index";
import express from "express";

import { getUser } from "../controllers";

const router = express.Router();

router.get("/:id", auth, getUser);

export default router;
