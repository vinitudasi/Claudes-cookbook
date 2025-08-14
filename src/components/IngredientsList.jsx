import React from "react";

function IngredientsList({ ingredients, getRecipe }) {
  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index} className="ingredient-list-item">
      {ingredient}
    </li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredient-list">{ingredientListItems}</ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a Recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
