 import React, { useState } from "react";
  import "./App.css";
  import RecipeCreate from "./RecipeCreate";
  import RecipeList from "./RecipeList";
  import RecipeData from "./RecipeData"
  
  function App() {
    const [recipes, setRecipes] = useState(RecipeData);
  
    const deleteRecipe = (index) => {
      // remove the recipe at the specified index from the list of recipes
      const updatedRecipes = [...recipes];
      updatedRecipes.splice(index, 1);
      setRecipes(updatedRecipes);
    }
  
    const createRecipe = (newRecipe) => {
      // add the new recipe to the list of recipes
      setRecipes([...recipes, newRecipe]);
    }
  
    return (
      <div className="App">
        <header><h1>Delicious Food Recipes</h1></header>
        <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
        <RecipeCreate createRecipe={createRecipe} />
      </div>
    );
  }
  
  export default App;
  