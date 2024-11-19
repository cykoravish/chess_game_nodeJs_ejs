const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "welcome to chess game" });
});

io.on("connection", function (uniquesocket) {
  console.log("connected");
  uniquesocket.on("baby", () => {
    io.emit("baby mil gya");
  });
});

server.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
