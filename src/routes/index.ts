import { auth } from "./../middlewares/index";
import express from "express";

import { getUser } from "../controllers";

const router = express.Router();

router.get("/:id", auth, getUser);

export default router;

//ROUTES

// */ - GET, get all users
// */:id - GET, get specific user
// */me - GET, Get user
// */register - POST, register user
// */login - POST, Login user
// */logout - POST, Logout user
