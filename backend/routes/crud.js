const express = require('express');
const router = express.Router();
const { getAllRecommendations, createRecommendation, updateRecommendation, deleteRecommendation } = require('../services/localDb');

router.get('/recommendations', async (req, res) => {
  try {
    const { category } = req.query;
    const results = await getAllRecommendations(category);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

router.post('/recommendations', async (req, res) => {
    try {
        const data = req.body;
        const result = await createRecommendation(data);
        res.json({ message: 'Recommendation created successfully', result });
    } catch (error) {
        res.status(500).json({
            error: 'Operation failed',
            message: error.message
        });
    }
});

router.put('/recommendations', async (req, res) => {
    try {
        const { id, ...data } = req.body;
        const result = await updateRecommendation(id, data);
        res.json({ message: 'Recommendation updated successfully', result });
    } catch (error) {
        res.status(500).json({
            error: 'Operation failed',
            message: error.message
        });
    }
});

router.delete('/recommendations', async (req, res) => {
    try {
        const { id } = req.query;
        const result = await deleteRecommendation(id);
        res.json({ message: 'Recommendation deleted successfully', result });
    } catch (error) {
        res.status(500).json({
            error: 'Operation failed',
            message: error.message
        });
    }
});

module.exports = router;