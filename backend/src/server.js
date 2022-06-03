import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import cors from 'cors';
import credentials from './middlewares/credentials.js';
import cookieParser from 'cookie-parser';
import docRouter from './routes/doc.js';
import userRouter from './routes/user.js'


const app = express();
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  credentials: true
};

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/doc', docRouter);
app.use('/user', userRouter);



app.listen(process.env.SERVER_PORT, ()=> {
  console.log("Server is listening: ", process.env.SERVER_PORT)
})

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => {
  console.log('connect to DB')
})

