const express = require("express");
const cors = require("cors");
const app = express();
const DataBase = require("./config/DataBase");
const ProjectRoutes = require("./routes/project");

DataBase.connect();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1", ProjectRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));
