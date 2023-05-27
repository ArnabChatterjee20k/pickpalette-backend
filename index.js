import express from "express";
import newsletterRouter from "./v1/route/newsletter.js";
import feedbackRouter from "./v1/route/feedback.js";
import getIP from "./utils/getIP.js";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config(".env");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())

app.use("/newsletter", newsletterRouter);
app.use("/feedback", feedbackRouter);

app.listen(PORT, getIP(), () => {
  console.log(`Server listening on http://${getIP()}:${PORT}`);
});
