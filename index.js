import express from "express";
import router from "./v1/route/newsletter.js";
import getIP from "./utils/getIP.js";
import * as dotenv from 'dotenv' 
import cors from 'cors';
dotenv.config(".env")


const app = express()
const PORT = process.env.PORT

app.use(cors())

app.use("/newsletter",router)


app.listen(PORT, getIP(), () => {
    console.log(`Server listening on http://${getIP()}:${PORT}`);
  });