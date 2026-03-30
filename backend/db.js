const { MongoClient } = require("mongodb");

/**
 * Module de connexion à la base de données
 * 
 * La flexibilité de MongoDB brille ici - nous nous connectons à une seule base de données
 * qui stockera des documents avec des structures très différentes dans la même collection.
 * Contrairement aux bases SQL, nous n'avons pas besoin de définir des tables ou modifier des schémas
 * lors de l'ajout de nouveaux types d'activité.
 */

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("");
    console.log("Connected to MongoDB");
  }
  return db;
}

module.exports = connectDB;