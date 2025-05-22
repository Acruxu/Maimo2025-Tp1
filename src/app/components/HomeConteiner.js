import RecipesGrid from "@/app/components/RecipeGrid"
import Hero from "./Hero"

const HomeConteiner = () => {
  return (
    <div className="home_conteiner">
        <Hero/>
        <h1>Las mejores recetas</h1>
        <RecipesGrid/>
    </div>
  )
}

export default HomeConteiner