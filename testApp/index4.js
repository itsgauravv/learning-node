import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3005;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", function (req, res) {
  console.log(req.body);
  const mixedString = req.body.street + req.body.pet;
  res.send(mixedString);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
