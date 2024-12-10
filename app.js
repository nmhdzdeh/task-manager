const express = require("express");
const dotenv = require("dotenv");
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./config/db");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasksRoutes);

app.use(notFound);
app.use(errorHandler);

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
