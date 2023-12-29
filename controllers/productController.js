

module.exports.getAllProducts = async (req, res) => {

  try {

    return res.status(200).json('somes');
  } catch (err) {
    return res.status(400).json(`${err}`);
  }

}



