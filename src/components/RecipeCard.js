import React from 'react'

const RecipeCard= ({recipe}) => {
    const {idMeal, strMeal, strCategory, strMealThumb} = recipe;
  return (
    <div className="card">
    <img
    src={strMealThumb}
    alt={strMeal}
    className='card-image' />
    <div className='card-body'>
        <span className='category'>{strCategory}</span>
        <a href={"https://www.themealdb.com/meal/" +idMeal} rel="noreferrer"target= "_blank">Ingredients</a>

        <h3>{strMeal}</h3>
        
    </div>
    </div>
  ) 
}

export default RecipeCard