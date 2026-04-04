require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const searchRoutes = require('./routes/search');
const generateRoutes = require('./routes/generate');
const localDbRoutes = require('./routes/crud');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/search', searchRoutes);
app.use('/generate', generateRoutes);
app.use('/crud', localDbRoutes);

// Démarrer le serveur
async function startServer() {
  try {
    await connectDB();
    console.log('Connexion MongoDB établie.');

    app.listen(5000, () => {
      console.log(`\nLifeLog Hub API Server running on http://localhost:${5000}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();