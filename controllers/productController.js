const Product = require('../model/Product');

module.exports.getAllProducts = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json(`${err}`);
  }

}


module.exports.addProduct = async (req, res) => {
  try {

    return res.status(200).json('success');
  } catch (err) {
    return res.status(400).json(`${err}`);
  }

}
