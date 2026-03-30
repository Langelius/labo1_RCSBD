import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export async function searchMovie(title) {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { q: title }
    });
    return response.data;
  } catch (error) {
    console.error('searchMovie error:', error.message);
    return { results: [] };
  }
}

export async function searchRecipe(name) {
  try {
    const response = await axios.get(`${BASE_URL}/search/recipe`, {
      params: { q: name }
    });
    return response.data;
  } catch (error) {
    console.error('searchRecipe error:', error.message);
    return { results: [] };
  }
}

export async function generateAIResponse(query) {
  try {
    const response = await axios.get(`${BASE_URL}/generate`, {
      params: {
        ...query,
        selectedMovies: JSON.stringify(query.selectedMovies)
      }
    });
    return response.data;
  } catch (error) {
    console.error('generateAIResponse error:', error.message);
    return { response: '' };
  }
}

export async function generateAIResponseForRecipes(query) {
  try {
    const response = await axios.get(`${BASE_URL}/generate/recipes`, {
      params: {
        ...query,
        selectedRecipes: JSON.stringify(query.selectedRecipes)
      }
    });
    return response.data;
  } catch (error) {
    console.error('generateAIResponseForRecipes error:', error.message);
    return { response: '' };
  }
}