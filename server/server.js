const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const PORT = 3000;
const app = express();
const DB =
"mongodb+srv://hhaylett:H3ath3r@help-desk.okobj2u.mongodb.net/?retryWrites=true&w=majority&appName=help-desk";

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});

app.use(bodyParser.json());

app.post("/support", (req, res) => {
  console.log(req.body)
});

app.get("/tickets", (req, res) => {
  res.send({
    name: "Chris",
    email: "chris@email.com",
    message: "I need help.",
    status: "New",
    id: 789
  })
})
