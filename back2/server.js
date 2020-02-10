const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/surname", (req, res) => {
  res.send({ surname: "Sanil" });
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on ${port}..`));

module.exports = app;
