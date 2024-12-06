const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use("/api/v1/tasks", tasksRoutes);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
    await connectDB(process.env.MONGO_URL);
    console.log("CONNECTED TO DB...");
  } catch (err) {
    console.log(err);
  }
};

start();
