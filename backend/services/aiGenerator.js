const axios = require('axios');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

async function queryAIGenerator(query) {
  try {
    const { selectedMovies, mood, watchTime, watchWith } = query;

    const message = `Tu es un expert en recommandations de films. Voici les films disponibles : ${selectedMovies.join(', ')}. 
L'utilisateur a les préférences suivantes :
- Humeur : ${mood}
- Temps de visionnage : ${watchTime}
- Regarder avec : ${watchWith}

Suggère UN film parmi la liste et explique pourquoi il correspond parfaitement à la situation décrite. Réponds en français.`;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o-mini',
        max_tokens: 1000,
        messages: [{ role: 'user', content: message }]
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenRouter movie error:', error.message);
    return 'Impossible de générer une suggestion pour le moment.';
  }
}

async function queryAIGeneratorForRecipes(query) {
  try {
    const { selectedRecipes, diet, timeAvailable, budget, skillLevel, cookingFor } = query;

    const message = `Tu es un chef cuisinier expert. Voici les recettes / ingrédients disponibles : ${selectedRecipes.join(', ')}.
L'utilisateur a les préférences suivantes :
- Régime alimentaire : ${diet}
- Temps disponible : ${timeAvailable}
- Budget : ${budget}
- Niveau de compétence : ${skillLevel}
- Cuisiner pour : ${cookingFor}

Suggère UNE recette en lien avec les éléments fournis et explique pourquoi elle convient parfaitement. Réponds en français.`;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o-mini',
        max_tokens: 1000,
        messages: [{ role: 'user', content: message }]
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenRouter recipe error:', error.message);
    return 'Impossible de générer une suggestion pour le moment.';
  }
}

module.exports = {
    queryAIGenerator,
    queryAIGeneratorForRecipes
}