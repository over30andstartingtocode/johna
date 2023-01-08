import React, { useState } from "react";

function RecipeCreate(props) {
    const [name, setName] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [photo, setPhoto] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparation, setPreparation] = useState("");
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // create the new recipe
      const newRecipe = {
        name,
        cuisine,
        photo,
        ingredients,
        preparation,
      };
      // clear the form
      setName("");
      setCuisine("");
      setPhoto("");
      setIngredients("");
      setPreparation("");
      // add the new recipe to the recipes state in the App component
      props.createRecipe(newRecipe)
    };
  
    return (
    <form name="create" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="cuisine">Cuisine:</label>
      <input type="text" name="cuisine" value={cuisine} onChange={(event) => setCuisine(event.target.value)} />
      <select name="cuisine" value={cuisine} onChange={(event) => setCuisine(event.target.value)}>
        <option value="American">American</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
      </select>
      <br />
      <label htmlFor="photo">Photo:</label>
      <input type="text" name="photo" value={photo} onChange={(event) => setPhoto(event.target.value)} />
      <br />
      <label htmlFor="ingredients">Ingredients:</label>
      <textarea name="ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
      <br />
      <label htmlFor="preparation">Preparation:</label>
      <textarea name="preparation" value={preparation} onChange={(event) => setPreparation(event.target.value)} />
      <br />
      <button type="submit">Create</button>
    </form>
  );

}

export default RecipeCreate;
