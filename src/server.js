const path = require("path");
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.static(publicDirectoryPath)); // GET /temperature.html

app.get("/", (req, res) => {
  //route handler
  res.render("index", {
    title: "Weather App",
    name: "Nissim"
  });
});

app.post("/", (req, res) => {
  console.log("re.body dans le route handler = ", req.body);
  const { name } = req.body;
  console.log(name);
  res.send("ok !");
});

app.get("/temperature/:city", (req, res) => {
  console.log(req.params.city);
  res.send("ok");
});

const port = 3000;

app.listen(port, () => console.log(`Listenning on port ${port}...`));
