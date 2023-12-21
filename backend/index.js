require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const userRoutes = require("./routes/user");

app.use(express.json());
app.use(cors());
app.use("/api/user", userRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}\nConnected to DB`);
    });
  })
  .catch((err) => console.log(err));
