import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title,calories,image,cautions,dietLabels,source, time, mealType,ingredients}) => {
    return(
       <div  className={style.recipe}>
           <h1>{title}</h1>
    <p>{mealType}</p>
    <p>{time}</p>
    <p>{cautions}</p>
    <p>{dietLabels}</p>
    <p>{source}</p>
     


           {/* <ol>
               {ingredients.map(ingredient =>(
                   <li>{ingredient.text}</li>
               ))}
               </ol> */}
               {/* <p>{calories}</p> */}
           <img src={image} alt="" />
           </div>
    );
}

export default Recipe