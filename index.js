const express = require('express');
const mongoose=require("mongoose")
 const app = express();
 const authRoutes = require('./routes/auth');
 const protectedRoute = require('./routes/protectedRoute');
 mongoose
  .connect("mongodb://127.0.0.1:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
 app.use(express.json());
 app.use('/auth', authRoutes);
 app.use('/protected', protectedRoute);
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });