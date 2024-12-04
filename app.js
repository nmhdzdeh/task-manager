const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");

app.use(express.json());

app.use("/api/v1/tasks", tasksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
