const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/name", (req, res) => {
  res.send({ data: "Aditya" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on ${port}..`));

module.exports = app;
