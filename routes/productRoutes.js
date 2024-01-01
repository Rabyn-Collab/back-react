const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const { authCheck, adminCheck } = require('../middlewares/auth_middleware');
const { fileCheck } = require('../middlewares/file_check');
const router = express.Router();
const notAllowed = (req, res) => res.status(405).json('method not allowed');



router.route('/api/products').get(authCheck, fileCheck, getAllProducts).all(notAllowed);




module.exports = router;



