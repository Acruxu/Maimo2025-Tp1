"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const RecipeContainer = ({ id }) => {
  const [dataRecipe, setDataRecipe] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDataRecipe = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=20&skip=0"
        );
        const responsedatarecipe = response.data.recipes;
        setDataRecipe(responsedatarecipe);
      } catch (error) {
        console.log("Mi error fue", error);
        setError(true);
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
    <>
      {recipe ? (
        <>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} />
          <p>
            <strong>Cuisine:</strong> {recipe.cuisine}
          </p>
          <p>
            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
          </p>
          <p>
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>

          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
        </>
      ) : (
        <p>recipe not found...</p>
      )}
    </>
  );
};

export default RecipeContainer;
