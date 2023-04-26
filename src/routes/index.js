"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./../middlewares/auth");
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.default.Router();
router.get("/:id", auth_1.authenticate, controllers_1.getUser);
exports.default = router;
//ROUTES
// */ - GET, get all users
// */:id - GET, get specific user
// */me - GET, Get user
// */register - POST, register user
// */login - POST, Login user
// */logout - POST, Logout user
