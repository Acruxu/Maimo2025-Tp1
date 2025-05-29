import RecipeContainer from "@/app/components/RecipeContainer";
import React from "react";

const Recipe = async ({ params }) => {
  const { id } = await params;
  return (
    <RecipeContainer id={id}/>
  );
};

export default Recipe;
