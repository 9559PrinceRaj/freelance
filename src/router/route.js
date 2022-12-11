const express = require('express');
//const {route} = require('express/lib/application');
const router = express.Router();

const userCtrl = require("../controllers/userCtrl")


// create author
router.post("/login", userCtrl.loginUser)

module.exports = router