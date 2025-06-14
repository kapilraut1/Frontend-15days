const express = require('express')
const app = express()
const mongoose =require( 'mongoose');
const dotenv = require('dotenv')
const cors= require('cors')
const userRoutes= require('./routes/userRoutes')

//dotenv
dotenv.config();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

//Routes
// Routes
app.use('/api/signup', userRoutes);

// Connect MongoDB & start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log("MongoDB connection failed:", err));
