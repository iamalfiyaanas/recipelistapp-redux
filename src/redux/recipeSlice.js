// src/redux/recipeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for asynchronous actions
export const fetchAllRecipes = createAsyncThunk(
  'recipes/fetchAllRecipes',async () => {
    const result = await axios.get('https://dummyjson.com/recipes');
    sessionStorage.setItem("allrecipes",JSON.stringify(result.data.recipes))
    return result.data.recipes
  });

// export const searchRecipesByCuisine = createAsyncThunk(
//   'recipes/searchRecipesByCuisine',
//   async (cuisine) => {
//     const response = await axios.get(`${API_URL}?cuisine=${cuisine}`);
//     return response.data;
//   }
// );

// export const fetchRecipeById = createAsyncThunk(
//   'recipes/fetchRecipeById',
//   async (id) => {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   }
// );


// The recipe slice
const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    allrecipes: [],
    dummyAllRecipes:[],
    loading: false,
    error: ""
    
  },

  reducers: {
    //product search
        searchRecipe : (state,actionFromHeader)=>{
            state.allrecipes = state.dummyAllRecipes.filter(item=>item.cuisine.toLowerCase().includes(actionFromHeader.payload))
        },
        //add product to wishlist, component must pass entire product object
        addToRecipes : (state,recipeByComponentAction)=>{
          state.push(recipeByComponentAction.payload)
        },
        //remove product from wishlist, component must pass entire product id
        removeRecipeItem : (state,recipeByComponentAction)=>{
          return state.filter(item=>item!=recipeByComponentAction.payload)
        }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
      state.allrecipes = apiResult.payload
      state.dummyAllRecipes = apiResult.payload
      state.loading = false
      state.error = ""
  })
  builder.addCase(fetchAllRecipes.pending,(state,apiResult)=>{
      state.allrecipes = []
      state.dummyAllRecipes = []
      state.loading = true
      state.error = ""
  })
  builder.addCase(fetchAllRecipes.rejected,(state,apiResult)=>{
      state.allrecipes = []
      state.dummyAllRecipes = []
      state.loading = false
      state.error = "API CALL failed.. Please try after sometime!!!"
  })
  },
});

export const { searchRecipe, addToRecipes, removeRecipeItem } = recipeSlice.actions;
export default recipeSlice.reducer;
