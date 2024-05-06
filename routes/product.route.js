const express = require('express');
const { getProducts, getSingleProduct, getSingleSearch } = require('../controllers/product.controller');
const router=express.Router();

router.route('/').get(getProducts);
router.route('/getSingle/:_id').get(getSingleProduct);
router.route('/getSingleSearch/').get(getSingleSearch);
module.exports=router