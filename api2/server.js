const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page of api_2");
});
app.get("/surname", (req, res) => {
  res.send({ surname: "API 2" });
});

const port = 8080;
app.listen(port, () => console.log(`Listening on ${port}..`));

module.exports = app;
