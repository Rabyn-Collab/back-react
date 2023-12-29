const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const mongoose = require('mongoose');
const port = 5000;


mongoose.connect('mongodb+srv://teams700:moles900@cluster0.no9horl.mongodb.net/Shops').then((result) => {

  app.listen(port, () => {
    console.log('listening');
  });
}).catch((err) => {
  console.log(err);
})


app.use(express.json());



app.use(authRoutes);
app.use(productRoutes);



app.use((req, res) => {
  return res.status(404).json('not found');
});
