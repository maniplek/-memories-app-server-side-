import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL =
  "mongodb+srv://memories:iZB11gtkjJIXGge9@cluster0.ds2ljdr.mongodb.net/?retryWrites=true&w=majority";
  const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(()=> app.listen(PORT, () => console.log(`Sever is running on http://localhost:${PORT}`)))
    .catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false);