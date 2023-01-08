import React, { useState } from "react";
import RecipeData from "./RecipeData";

function RecipeList() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img
                  src={recipe.photo}
                  alt={recipe.name}
                  width="100%"
                  height="100%"
                  object-fit="scale-down"
                />
              </td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button name="delete" onClick={() => deleteRecipe(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
