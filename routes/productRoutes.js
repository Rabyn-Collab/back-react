const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const { authCheck } = require('../middlewares/auth_middleware');
const router = express.Router();
const notAllowed = (req, res) => res.status(405).json('method not allowed');



router.route('/api/products').get(authCheck, getAllProducts).all(notAllowed);




module.exports = router;



