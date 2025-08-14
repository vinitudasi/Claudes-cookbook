import { useState, useEffect, useRef } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai_model";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeRef = useRef(null);

  const addIngredient = (formData) => {
    const ingredient = formData.get("ingredient");

    if (!ingredient) return;

    const duplicate = ingredients.find(
      (item) => item.toLowerCase() === ingredient.toLowerCase(),
    );
    if (duplicate) {
      alert("Ingredient already added!");
      return;
    }

    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const getRecipe = async () => {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  };

  useEffect(() => {
    if (recipe && recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <main>
      <form action={addIngredient} className="ingredient-form">
        <input
          aria-label="Add ingredients"
          type="text"
          placeholder="e.g. Eggs, Milk, Bread"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && (
        <div ref={recipeRef}>
          <ClaudeRecipe recipe={recipe} />
        </div>
      )}
    </main>
  );
}
