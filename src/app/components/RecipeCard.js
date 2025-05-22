import Image from "next/image"
import BtnInfo from "./BtnInfo";


const RecipeCard = ({name, image, id}) => {
  return (
    <div className='recipe_card'>
    <Image src={image} width={300} height={300} alt={name}/>
    <h3>{name}</h3>
    <BtnInfo/>
    </div>
  );
}

export default RecipeCard