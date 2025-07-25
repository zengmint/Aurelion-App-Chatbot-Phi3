// db.js
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017"; // Cambia si usás Atlas o un cluster
const client = new MongoClient(uri);

let db;

async function connect() {
  if (!db) {
    await client.connect();
    db = client.db("aurelion_chat");
  }
  return db;
}

async function guardarMensaje({ chat_id, autor, mensaje }) {
  const db = await connect();
  await db.collection("mensajes").insertOne({
    chat_id,
    autor,
    mensaje,
    timestamp: new Date()
  });
}

module.exports = { guardarMensaje };
