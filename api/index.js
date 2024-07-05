import express from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js';
import authRoutes from './routes/authRoute.js';
// import cors from "cors";


dotenv.config();
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)

