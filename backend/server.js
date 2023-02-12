const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var cookieParser = require("cookie-parser");

const app = express();
const connectdb = require("../backend/config/connectdb");
const userRouter = require("./routes/user");
const carRouter = require("./routes/car");
const contactRouter = require("./routes/contact");
const port = 5003;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

require("dotenv").config();

mongoose.set("strictQuery", true);

app.use(express.json());

connectdb();

app.use("/auth/user", userRouter);
app.use("/car", carRouter);
app.use("/contact", contactRouter);

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`you are connect to port ${port}`);
});
