// chat_db_server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/bitacora16d", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const mensajeSchema = new mongoose.Schema({
  chat_id: Number,
  autor: String,
  mensaje: String,
  timestamp: { type: Date, default: Date.now }
});

const Mensaje = mongoose.model("Mensaje", mensajeSchema);

app.post("/mensajes", async (req, res) => {
  try {
    const nuevo = new Mensaje(req.body);
    await nuevo.save();
    res.status(201).json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("🧠 MongoDB chat server corriendo en http://localhost:5000");
});
