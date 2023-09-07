const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

const cors = require('cors');
const stripeRoute = require('./routes/stripe');

dotenv.config();



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected:`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}



app.use(cors())
app.use("/api/checkout", stripeRoute);

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



connectDB().then(() => {
    app.listen(process.env.PORT || 3000, () => {
    console.log('Backend server is running on port 3000');
    })
});

