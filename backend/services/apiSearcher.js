const axios = require('axios');

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

async function searchMovies(query) {
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: query,
        apikey: OMDB_API_KEY,
        type: 'movie'
      }
    });

    if (response.data.Response === 'True') {
      return response.data.Search.map(movie => ({ title: movie.Title }));
    }
    return [];
  } catch (error) {
    console.error('OMDb search error:', error.message);
    return [];
  }
}

async function searchRecipes(query) {
  try {
    const response = await axios.get('https://api.spoonacular.com/food/ingredients/autocomplete', {
      params: {
        query: query,
        apiKey: SPOONACULAR_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Spoonacular search error:', error.message);
    return [];
  }
}

module.exports = {
    searchMovies,
    searchRecipes
}