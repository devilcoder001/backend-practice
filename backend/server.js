const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/write", (req, res) => {
  fs.writeFileSync("data.txt", req.body.text);
  res.send("saved");
});

app.get("/read", (req, res) => {
  const data = fs.readFileSync("data.txt", "utf8");
  res.send(data);
});

app.listen(5000, () => console.log("Server running on 5000"));
