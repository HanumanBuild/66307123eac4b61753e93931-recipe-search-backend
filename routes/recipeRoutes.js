const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/recipes', async (req, res) => {
    const userInput = req.query.q;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&apiKey=${process.env.SPOONACULAR_API_KEY}`;
    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipe data' });
    }
});

module.exports = router;