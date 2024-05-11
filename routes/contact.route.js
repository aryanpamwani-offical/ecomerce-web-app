const express = require('express');
const contactController = require('../controllers/contact.controller');

const router=express.Router();

router.post("/contact",contactController);
module.exports=router