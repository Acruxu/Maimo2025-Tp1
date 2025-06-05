import RecipeContainer from "@/app/components/RecipeContainer";
import React from "react";

const Recipe = async ({ params }) => {
  const { id } = await params;
  return (
    <>
    <a className="btn_volver" href="#">← Back to home</a>
    <RecipeContainer id={id}/>
    </>
  );
};

export default Recipe;
