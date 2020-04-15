const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/name", (req, res) => {
  res.send({ data: "API 1" });
});

const port = 5000;
app.listen(port, () => console.log(`Listening on ${port}..`));

module.exports = app;
