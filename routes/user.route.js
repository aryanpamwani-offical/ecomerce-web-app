const express = require('express');
const { loginController, registerController } =require('../controllers/user.controller');
const router=express.Router();

router.post('/signup',registerController)
router.post('/login',loginController)

module.exports=router