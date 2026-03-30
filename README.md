# Laboratoire 1 — RCS : Recommandations Films & Recettes

Application web full stack permettant de rechercher des films et des recettes via des API externes, de générer des suggestions personnalisées à l'aide de l'intelligence artificielle, et de sauvegarder ces recommandations dans une base de données MongoDB locale.

---

## Technologies utilisées

**Backend**
- Node.js + Express
- MongoDB (via le pilote natif `mongodb`)
- Axios (appels HTTP vers les API externes)
- dotenv (gestion des variables d'environnement)

**Frontend**
- React (Create React App)
- Axios

**API externes**
- [OMDb API](https://www.omdbapi.com/) — recherche de films
- [Spoonacular API](https://spoonacular.com/food-api) — recherche de recettes/ingrédients
- [OpenRouter](https://openrouter.ai/) — génération de suggestions par IA (modèle `openai/gpt-4o-mini`)

---

## Structure du projet

```
code-laboratoire1/
├── backend/
│   ├── services/
│   │   ├── apiSearcher.js     # Appels OMDb et Spoonacular
│   │   ├── aiGenerator.js     # Appels OpenRouter (IA)
│   │   └── localDb.js         # Opérations CRUD MongoDB
│   ├── routes/
│   │   ├── search.js          # GET /search/movie, /search/recipe
│   │   ├── generate.js        # GET /generate, /generate/recipes
│   │   └── crud.js            # GET/POST/PUT/DELETE /crud/recommendations
│   ├── db.js                  # Connexion MongoDB
│   ├── index.js               # Point d'entrée Express (port 5000)
│   ├── .env                   # Variables d'environnement (à ne pas committer)
│   └── .env.example           # Modèle de fichier .env
└── frontend/
    └── src/
        ├── services/
        │   ├── api.js          # Fonctions de recherche et génération IA
        │   └── crud.js         # Fonctions CRUD vers le backend
        └── components/
            └── Accueil.jsx     # Composant principal de l'application
```

---

## Installation et démarrage

### Prérequis

- Node.js v18 ou supérieur
- MongoDB installé et en cours d'exécution localement (`mongod`)
- Clés API valides (voir section Configuration)

### 1. Cloner le projet

```bash
git clone https://github.com/Langelius/labo1_RCSBD.git
cd labo1_RCSBD
```

### 2. Configurer les variables d'environnement

```bash
cd backend
cp .env.example .env
```

Ouvrir le fichier `.env` et remplir les clés API (voir section Configuration ci-dessous).

### 3. Installer les dépendances du backend

```bash
cd backend
npm install
```

### 4. Démarrer le backend

```bash
node index.js
# ou avec rechargement automatique :
npx nodemon index.js
```

Le serveur démarre sur **http://localhost:5000**.

### 5. Installer les dépendances du frontend

```bash
cd ../frontend
npm install
```

### 6. Démarrer le frontend

```bash
npm start
```

L'application s'ouvre automatiquement sur **http://localhost:3000**.

---

## Configuration — Clés API

Le backend utilise un fichier `.env` situé dans le dossier `backend/`. Ce fichier **ne doit jamais être commité** dans Git.

| Variable | Description | Où l'obtenir |
|---|---|---|
| `OMDB_API_KEY` | Clé pour la recherche de films | [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) (gratuit) |
| `SPOONACULAR_API_KEY` | Clé pour la recherche de recettes | [spoonacular.com/food-api](https://spoonacular.com/food-api) (gratuit) |
| `OPENROUTER_API_KEY` | Clé pour la génération IA | [openrouter.ai](https://openrouter.ai/) |
| `MONGODB_URI` | URI de connexion MongoDB | `mongodb://127.0.0.1:27017` (local par défaut) |
| `MONGODB_DB_NAME` | Nom de la base de données | `laboratoire1` (par défaut) |

Exemple de fichier `.env` complet :

```env
OMDB_API_KEY=abc123xyz
SPOONACULAR_API_KEY=def456uvw
OPENROUTER_API_KEY=sk-or-...
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB_NAME=laboratoire1
```

---

## Fonctionnalités

### Mode Films
1. Rechercher un film par titre (via OMDb)
2. Sélectionner un ou plusieurs films dans les résultats
3. Remplir ses préférences : humeur, durée de visionnage, avec qui
4. Générer une suggestion IA personnalisée
5. Sauvegarder la recommandation dans l'historique
6. Supprimer une recommandation de l'historique

### Mode Recettes
1. Rechercher une recette ou un ingrédient (via Spoonacular)
2. Sélectionner un ou plusieurs éléments dans les résultats
3. Remplir ses préférences : régime alimentaire, temps disponible, budget, niveau, nombre de personnes
4. Générer une suggestion IA personnalisée
5. Sauvegarder la recommandation dans l'historique
6. Supprimer une recommandation de l'historique

---

## Routes API (backend)

| Méthode | Route | Description |
|---|---|---|
| GET | `/search/movie?q=<titre>` | Recherche de films via OMDb |
| GET | `/search/recipe?q=<nom>` | Recherche de recettes via Spoonacular |
| GET | `/generate?selectedMovies=...&mood=...` | Génère une suggestion de film par IA |
| GET | `/generate/recipes?selectedRecipes=...&diet=...` | Génère une suggestion de recette par IA |
| GET | `/crud/recommendations?category=movies` | Récupère toutes les recommandations |
| POST | `/crud/recommendations` | Crée une nouvelle recommandation |
| PUT | `/crud/recommendations` | Met à jour une recommandation |
| DELETE | `/crud/recommendations?id=<id>` | Supprime une recommandation |

---

## Organisation du travail

Le travail est réalisé en binôme :
- **GUIMDO TEKOMBO ARCHANGE VALDEX ** — fonctionnalités Films (recherche, génération IA, historique films)
- **WILFRED GALIMAR** — fonctionnalités Recettes (recherche, génération IA, historique recettes)

---

## Notes importantes

- Le fichier `.env` est ignoré par Git (via `.gitignore`). Ne jamais y mettre de vraies clés dans un dépôt public.
- MongoDB doit être démarré avant de lancer le backend.
- Le frontend appelle le backend sur `http://localhost:5000`. S'assurer que le backend est bien en cours d'exécution avant d'utiliser l'interface.