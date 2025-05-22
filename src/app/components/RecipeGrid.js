'use client'

import {useState, useEffect} from 'react'
import RecipeCard from "@/app/components/RecipeCard";
import axios from 'axios';

const RecipesGrid = () => {
 
const [data, setData] = useState([])

useEffect(() => {
const getData = async () => {
  const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0')
  const responsedata = response.data.recipes
  console.log(responsedata)
  setData(responsedata)
}

getData()
}, [])

  return (
    <div className='recipes_grid'>
        {data.map((recipe)=> (
        <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} id={recipe.id}/>
        ))}
    </div>
  );
};

export default RecipesGrid