const express = require("express");
const { registerUser, LoginUser, CurrentUser} = require("../controllers/userControllers");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register",registerUser)

router.post("/login",LoginUser)

router.get("/current",validateToken,CurrentUser);
module.exports = router;