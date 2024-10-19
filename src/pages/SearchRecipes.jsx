// src/components/SearchRecipes.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { searchRecipesByCuisine } from '../redux/recipeSlice';

const SearchRecipes = () => {
  const [cuisine, setCuisine] = useState('');
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector((state) => state.recipes);

  const handleSearch = () => {
    if (cuisine) {
      dispatch(searchRecipesByCuisine(cuisine));
    }
  };

  return (
    <div>
      <h1>Search Recipes by Cuisine</h1>
      <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder="Enter cuisine"/>
      <button onClick={handleSearch}>Search</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {list.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchRecipes;
