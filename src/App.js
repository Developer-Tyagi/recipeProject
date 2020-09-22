import React , { useState, useEffect} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const API_ID ="7b7696d5"
  const API_KEY= "76db19cecf391662440014f117babbb6"

    const [recipes , setRecipe] = useState([]);
    const [search, setSearch] = useState("")   
    const [query, setQuery] = useState('chicken')
    
    useEffect( () => {
      getRecipe();  
    }, [query]);

    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
        );
      const data = await response.json();
      setRecipe(data.hits);
      console.log(data.hits);
    };

    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search)
      setSearch('');
    }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
           
                <input type="text" value = {search} onChange={updateSearch} style={{width: "370px"}} />
                 <button className="Btn">Search</button>  
                 <Recipe />
        </form>
        <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title= {recipe.recipe.label} cautions={recipe.recipe.cautions} dietLabels={recipe.recipe.dietLabels} time = {recipe.recipe.time} calories = {recipe.recipe.calories} image= {recipe.recipe.image} mealType= {recipe.recipe.mealType} ingredients= {recipe.recipe.ingredients } /> 
        )) 
        }
        </div>
      </div>
  );
}

export default App;
