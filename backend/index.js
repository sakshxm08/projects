const config = require("./config");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = config.PORT;
const MONGO_URI = config.MONGO_URI;

const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api/auth", userRoutes);
app.use("/api/project", projectRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}\nConnected to DB`);
    });
  })
  .catch((err) => console.log(err));
