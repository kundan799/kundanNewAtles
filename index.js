const express = require("express");
require("dotenv").config();
const cors = require("cors");

const auth = require("./routes/auth.routes");
const studentRouter = require("./routes/students.routes");
const testRouter = require("./routes/test.routes");
const connection = require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", auth);
app.use("/student", studentRouter);
app.use("/test", testRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
  } catch (er) {
    console.log("Error in database-conncetion");
  }
  console.log(`Listening on ${process.env.PORT}`);
});
