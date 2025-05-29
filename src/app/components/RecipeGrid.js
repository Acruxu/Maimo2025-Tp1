"use client";

import { useState, useEffect } from "react"; //son hooks de react
import RecipeCard from "@/app/components/RecipeCard";
import axios from "axios";
import Loading from "./Loading";

//fragment para agrupar en vez de div <> </>
const RecipesGrid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=20&skip=0"
        );
        const responsedata = response.data.recipes;
        setData(responsedata);
        setLoading(false);
      } catch (error) {
        console.log("Mi error fue", error);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <div className="recipes_grid">
      
    
     
      {!loading &&
      data.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
              id={recipe.id}
            />
          ))}
      {loading && <Loading/>}
    </div>
  );
};

export default RecipesGrid;

//condicion ? si la condicion es verdadera: si la condicion es falsa if ternario
  /*{!loading
        ? data.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
              id={recipe.id}
            />
          ))
        : "loading..."}*/