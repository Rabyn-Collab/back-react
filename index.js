const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const mongoose = require('mongoose');
const port = 5000;
const cors = require('cors');
const fileUpload = require('express-fileupload');

// const person = {
//   name: 'ram'
// };
// person.age = 90;
// console.log(person);
mongoose.connect('mongodb+srv://teams700:moles900@cluster0.no9horl.mongodb.net/Shops').then((result) => {

  app.listen(port, () => {
    console.log('listening');
  });
}).catch((err) => {
  console.log(err);
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  abortOnLimit: true,

}));

app.use(authRoutes);
app.use(productRoutes);



app.use((req, res) => {
  return res.status(404).json('not found');
});
