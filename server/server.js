const express = require("express");
const bodyParser = require("body-parser")

const PORT = 3000;
const app = express();


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
