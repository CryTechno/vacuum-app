import express from "express";
import { Request } from "express";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(cors<Request>());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/", (req, res) => {
  res.send("Stop DDos attack pls");
});
