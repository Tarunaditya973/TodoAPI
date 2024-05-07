const express = require("express");
const DBconnection = require("./dbConnection");
const TodoRoutes = require("./routes/TodoRoutes");
const app = express();
DBconnection();
const PORT = 8080;
app.use(express.json());

app.use("/api", TodoRoutes);

app.listen(PORT, () => {
  console.log("Server on Port 8080");
});
