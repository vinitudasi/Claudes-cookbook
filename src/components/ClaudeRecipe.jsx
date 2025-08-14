import React from "react";
import ReactMarkdown from "react-markdown";

function ClaudeRecipe({ recipe }) {
  return (
    <section className="recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}

export default ClaudeRecipe;
