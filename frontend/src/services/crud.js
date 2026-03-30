import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export async function showAllRecommendations(category) {
  try {
    const response = await axios.get(`${BASE_URL}/crud/recommendations`, {
      params: { category }
    });
    return response.data;
  } catch (error) {
    console.error('showAllRecommendations error:', error.message);
    return { results: [] };
  }
}

export async function insertRecommendation(recommendation) {
  try {
    const response = await axios.post(`${BASE_URL}/crud/recommendations`, recommendation);
    return response.data;
  } catch (error) {
    console.error('insertRecommendation error:', error.message);
    return { results: [] };
  }
}

export async function deleteRecommendation(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/crud/recommendations`, {
      params: { id }
    });
    return response.data;
  } catch (error) {
    console.error('deleteRecommendation error:', error.message);
    return { results: [] };
  }
}

export async function updateMovie(id, movie) {
  try {
    const response = await axios.put(`${BASE_URL}/crud/recommendations`, { id, ...movie });
    return response.data;
  } catch (error) {
    console.error('updateMovie error:', error.message);
    return { results: [] };
  }
}