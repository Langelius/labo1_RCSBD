import { useEffect, useState } from 'react';
import './Accueil.css';


const Accueil = () => {
    const [category, setCategory] = useState("movies");

    // Movie state
    const [movie , setMovie] = useState("");
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [suggestedMovies, setSuggestedMovies] = useState([]);
    const [savedFilms, setSavedFilms] = useState([]);
    const [mood, setMood] = useState("");
    const [watchTime, setWatchTime] = useState("");
    const [watchWith, setWatchWith] = useState("");

    
    // Recipe state
    const [recipe, setRecipe] = useState("");
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const [suggestedRecipes, setSuggestedRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [diet, setDiet] = useState("");
    const [timeAvailable, setTimeAvailable] = useState("");
    const [budget, setBudget] = useState("");
    const [skillLevel, setSkillLevel] = useState("");
    const [cookingFor, setCookingFor] = useState("");

    useEffect(() => {
        const fetchRecommendations = async () => {
            const recommendations = await showAllRecommendations(category);
            if (category === "movies") {
                setSavedFilms(recommendations.results);
            } else {
                setSavedRecipes(recommendations.results);
            }
        }
        fetchRecommendations();
    }, [category])

    
    const [aiResponse, setAiResponse] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const chercher = async () => {
        if (category === "movies") {
            
        } else {
            
        }
    }

    const genererReponse = async () => {
        setIsGenerating();
        try {
            let params;
            let response;
            if (category === "movies") {
                
                setSelectedMovies();
                setSuggestedMovies();
            } else {
                params = { selectedRecipes: JSON.stringify(selectedRecipes), diet, timeAvailable, budget, skillLevel, cookingFor };
                response = 
                setSelectedRecipes();
                setSuggestedRecipes();
            }
            setAiResponse();
        } finally {
            setIsGenerating();
        }
    }

    const handleSelect = (title, checked) => {
        if (category === "movies") {
            if (checked) setSelectedMovies([]);
            else setSelectedMovies();
        } else {
            if (checked) setSelectedRecipes([]);
            else setSelectedRecipes();
        }
    };

    const sauvegarderRecommendation = async () => {
        switch (category) {
            case "movies":
                
                break;
            case "recipes":
                
                break;
            default:
                console.error("Unknown category:", category);
        }
    }

    const sauvegarderFilmRecommendation = async () => {
        
        setSavedFilms();
    }

    const sauvegarderRecetteRecommendation = async () => {
        setSavedRecipes();
        setSavedFilms();
    }

    const deleteRecommendation = async (id) => {
        
        if (category === "movies") {

            setSavedFilms();
        } else {

            setSavedRecipes();
        }
    }

    return (
        <div className="accueil-container">
            <header className="accueil-header">
                <h1>{category === "movies" ? "🎬 Movie Recommender" : "🍳 Recipe Finder"}</h1>
                <p>{category === "movies" ? "Trouvez le film parfait pour votre soirée" : "Trouvez la recette idéale pour votre repas"}</p>
            </header>

            <div className="main-grid">
                <div className="left-column">
                    <section className="search-section panel">
                        <h2>Recherche & Préférences</h2>
                        <div className="panel-content">
                            <div className="category-toggle">
                                <button
                                    className={`toggle-btn ${category === "movies" ? "active" : ""}`}
                                    onClick={() => setCategory("movies")}
                                >
                                    🎬 Films
                                </button>
                                <button
                                    className={`toggle-btn ${category === "recipes" ? "active" : ""}`}
                                    onClick={() => setCategory("recipes")}
                                >
                                    🍳 Recettes
                                </button>
                            </div>

                            {category === "movies" ? (
                                <div className="input-grid">
                                    <div className="input-group">
                                        <label>Titre du film</label>
                                        <input type="text" placeholder="Ex: Inception" onChange={(e) => setMovie(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Humeur</label>
                                        <input type="text" placeholder="Ex: Joyeux, Nostalgique..." onChange={(e) => setMood(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Durée de visionnage</label>
                                        <input type="text" placeholder="Ex: 2 heures" onChange={(e) => setWatchTime(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Avec qui</label>
                                        <input type="text" placeholder="Ex: En famille, Entre amis..." onChange={(e) => setWatchWith(e.target.value)} />
                                    </div>
                                </div>
                            ) : (
                                <div className="input-grid">
                                    <div className="input-group">
                                        <label>Nom de la recette</label>
                                        <input type="text" placeholder="Ex: Lasagne, Sushi..." onChange={(e) => setRecipe(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Régime alimentaire</label>
                                        <input type="text" placeholder="Ex: Végétarien, Sans gluten..." onChange={(e) => setDiet(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Temps disponible</label>
                                        <input type="text" placeholder="Ex: 30 minutes, 1 heure..." onChange={(e) => setTimeAvailable(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Budget</label>
                                        <input type="text" placeholder="Ex: Économique, Moyen..." onChange={(e) => setBudget(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Niveau de compétence</label>
                                        <input type="text" placeholder="Ex: Débutant, Intermédiaire..." onChange={(e) => setSkillLevel(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <label>Cuisiner pour</label>
                                        <input type="text" placeholder="Ex: 2 personnes, En famille..." onChange={(e) => setCookingFor(e.target.value)} />
                                    </div>
                                </div>
                            )}

                            <div className="button-row">
                                <button className="btn btn-search" onClick={() => chercher()}>🔍 Chercher</button>
                                <button className="btn btn-generate" onClick={() => genererReponse()} disabled={isGenerating}>{isGenerating ? '⏳ Génération...' : '🤖 Générer'}</button>
                            </div>
                        </div>
                    </section>

                    <section className="results-section panel">
                        <h2>{category === "movies" ? "Résultats de recherche" : "Recettes trouvées"}</h2>
                        <div className="panel-content">
                            {category === "movies" && (
                                suggestedMovies.length > 0 ? (
                                    <ul className="movie-list">
                                        {suggestedMovies.map((item, index) => (
                                            <li key={index} className={`movie-item ${selectedMovies.includes(item.title) ? 'selected' : ''}`}>
                                                <input
                                                    type="checkbox"
                                                    id={`movie-${index}`}
                                                    checked={selectedMovies.includes(item.title)}
                                                    onChange={(e) => handleSelect(item.title, e.target.checked)}
                                                />
                                                <span className="movie-title">{item.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="no-results">Aucun résultat — cherchez un film ci-dessus</p>
                                )
                            )}
                            {category === "recipes" && (
                                suggestedRecipes.length > 0 ? (
                                    <ul className="movie-list">
                                        {suggestedRecipes.map((item, index) => (
                                            <li key={index} className={`movie-item ${selectedRecipes.includes(item.name) ? 'selected' : ''}`}>
                                                <input
                                                    type="checkbox"
                                                    id={`recipe-${index}`}
                                                    checked={selectedRecipes.includes(item.name)}
                                                    onChange={(e) => handleSelect(item.name, e.target.checked)}
                                                />
                                                <span className="movie-title">{item.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="no-results">Aucun résultat — cherchez une recette ci-dessus</p>
                                )
                            )}
                        </div>
                    </section>
                </div>

                <div className="right-column">
                    <section className="ai-section panel">
                        <h2>AI Suggestions</h2>
                        <div className="panel-content">
                            {isGenerating ? (
                                <div className="loader-container">
                                    <div className="loader-spinner"></div>
                                    <p className="loader-text">Génération en cours...</p>
                                </div>
                            ) : aiResponse.length > 0 ? (
                                <div className="ai-response">{aiResponse}</div>
                            ) : (
                                <p className="ai-empty">Les suggestions IA apparaîtront ici</p>
                            )}
                        </div>
                        {aiResponse.length > 0 && (
                            <div className="panel-footer">
                                <button onClick={sauvegarderRecommendation} className="btn btn-save">💾 Sauvegarder</button>
                            </div>
                        )}
                    </section>

                    <section className="extra-section panel">
                        <h2>Historique</h2>
                        <div className="panel-content">
                            {category === "movies" && savedFilms.length > 0 ? (
                                savedFilms.map((film, index) => (
                                    <div key={index} className="history-card">
                                        <div className="history-header">
                                            <h3 className="history-title">{film.title}</h3>
                                            <button className="btn-delete" onClick={() => deleteRecommendation(film._id)}>🗑️</button>
                                        </div>
                                        <div className="history-details">
                                            <span>🎭 {film.mood}</span>
                                            <span>⏱️ {film.watchTime}</span>
                                            <span>👥 {film.watchWith}</span>
                                        </div>
                                        <p className="history-suggestion">{film.aiSuggestion}</p>
                                    </div>
                                ))
                            ) : category === "recipes" && savedRecipes.length > 0 ? (
                                savedRecipes.map((recipe, index) => (
                                    <div key={index} className="history-card">
                                        <div className="history-header">
                                            <h3 className="history-title">{recipe.title}</h3>
                                            <button className="btn-delete" onClick={() => deleteRecommendation(recipe._id)}>🗑️</button>
                                        </div>
                                        <div className="history-details">
                                            <span>🥗 {recipe.diet}</span>
                                            <span>⏱️ {recipe.timeAvailable}</span>
                                            <span>💰 {recipe.budget}</span>
                                            <span>📊 {recipe.skillLevel}</span>
                                            <span>👥 {recipe.cookingFor}</span>
                                        </div>
                                        <p className="history-suggestion">{recipe.aiSuggestion}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="ai-empty">Rien pour l'instant</p>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Accueil;