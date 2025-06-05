"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const RecipeContainer = ({ id }) => {
  const [dataRecipe, setDataRecipe] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataRecipe = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=20&skip=0"
        );
        const responsedatarecipe = response.data.recipes;
        setDataRecipe(responsedatarecipe);
        setLoading(false);
      } catch (error) {
        console.log("Mi error fue", error);
        setError(true);
        setLoading(false);
      }
    };

    getDataRecipe();
  }, []);

  let recipe = null;
  dataRecipe.map((item) => {
    if (item.id === parseInt(id)) {
      recipe = item;
    }
  });

  return (
    <div className="recipe_container">
      {!loading && recipe && (
        <>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} />
          <h3>Ingredients:</h3>
          <ul className="ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ul className="instructions">
            {" "}
            {recipe.instructions.map((instructions, index) => (
              <li key={index}>{instructions}</li>
            ))}
          </ul>
        </>
      )}

      {loading && (
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle
              fill="#c9a66b"
              stroke="#c9a66b"
              strokeWidth="7"
              r="7"
              cx="40"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4"
              ></animate>
            </circle>
            <circle
              fill="#c9a66b"
              stroke="#c9a66b"
              stroke-width="7"
              r="7"
              cx="100"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2"
              ></animate>
            </circle>
            <circle
              fill="#c9a66b"
              stroke="#c9a66b"
              stroke-width="7"
              r="7"
              cx="160"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0"
              ></animate>
            </circle>
          </svg>
        </p>
      )}
      {error && !loading && <p className="error_message">Ocurrió un error al cargar la receta.</p>}
    </div>
  );
};

export default RecipeContainer;
