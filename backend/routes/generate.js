const express = require('express');
const router = express.Router();
const { queryAIGenerator, queryAIGeneratorForRecipes } = require('../services/aiGenerator');

router.get('/', async (req, res) => {
  try {
    const { selectedMovies, mood, watchTime, watchWith } = req.query;
    const parsedMovies = JSON.parse(selectedMovies);
    const result = await queryAIGenerator({ selectedMovies: parsedMovies, mood, watchTime, watchWith });
    res.json({ response: result });
  } catch (error) {
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

router.get('/recipes', async (req, res) => {
  try {
    const { selectedRecipes, diet, timeAvailable, budget, skillLevel, cookingFor } = req.query;
    const parsedRecipes = JSON.parse(selectedRecipes);
    const result = await queryAIGeneratorForRecipes({ selectedRecipes: parsedRecipes, diet, timeAvailable, budget, skillLevel, cookingFor });
    res.json({ response: result });
  } catch (error) {
    console.error('AI Generation error:', error);
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

module.exports = router;