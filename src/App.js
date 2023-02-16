import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading ,setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] =useState([]);

  // function to search for the recipes
  // useEffect(() =>{
  const searchRecipes = async () => {
    setIsLoading(true);
    const url =apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  
  };

  useEffect(() =>{
    searchRecipes()

  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = event =>{
    event.preventDefault()
    searchRecipes()
  };

  
  return (
    <div className="App">
      
      <h1>Delicious Dishes Recipe App</h1>
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(event) => setQuery (event.target.value)}
        isLoading={isLoading}

        />
      
      <div className="recipes">
        {recipes
        ?recipes.map((recipe) =>(
      <RecipeCard key ={recipes.idMeal} recipe={recipe}/>
        ))
        :"No Recipes!"}
      </div>
      
    </div>
  );
}


export default App;
