const express = require('express');
const uploadFileController= require('../controllers/file.controller');
const   upload = require('../middleware/tempstorage');
const router=express.Router();

router.route('/uploadimage').post(upload.single("img"),uploadFileController);

module.exports= router