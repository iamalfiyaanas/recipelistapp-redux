// src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipes } from '../redux/recipeSlice.js';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { allrecipes, loading, error } = useSelector((state) => state.recipeReducer);

  const [CurrentPage,setCurrentPage] = useState(1)
  const recipePerPage = 8
  const totalPages = Math.ceil(allrecipes?.length/recipePerPage)
  const currentPageLastRecipeIndex = CurrentPage * recipePerPage
  const currentPagestartRecipeIndex = currentPageLastRecipeIndex - recipePerPage
  const visibleRecipeCards = allrecipes?.slice(currentPagestartRecipeIndex,currentPageLastRecipeIndex)
  

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);

  const navigateToNextPage = ()=>{
    if(CurrentPage!=totalPages){
      setCurrentPage(CurrentPage+1)
    }
  }
  const navigateToPrevPage = ()=>{
    if(CurrentPage!=1){
      setCurrentPage(CurrentPage-1)
    }
  }

  return (

    <>
    <Header insideHome={true}/>
    <div style={{marginTop:'120px'}} className='container mx-auto px-4'>
      {
        loading ? 
        <div style={{height:'60vh'}} className="flex justify-center items-center font-bolder">
          <img width={'90px'} height={'90px'} src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" className='me-2' alt="" />
          Loading...
        </div>
       :
       <>
            <div className="grid grid-cols-4 gap-4">
            {
              allrecipes.length>0 ?
                visibleRecipeCards?.map(recipes=>(
                  <div key={recipes?.id} className="rounded border p-2 shadow">
                    <img  style={{width:'100%',height:'200px'}} src={recipes?.image} alt="" />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{recipes?.name}</h3>
                      <Link style={{textDecoration:'none'}} className='bg-green-500 text-white p-1 inline-block rounded' to={`/${recipes?.id}/recipe`}>More</Link>
                    </div>
                  </div>
                  
                ))
              :
              <div className="fond-bolder text-center mt-5 mb-5 text-red-600">
                Recipe Not Found!!!
              </div> 

            }

            </div>
            {/* pagenation */}
            <div className="flex justify-center items-center mt-5 mb-5">
              <span onClick={navigateToPrevPage} style={{cursor:'pointer'}}><i className="fa-solid fa-backword me-5 "></i></span>
              <span className='font-bold'>{CurrentPage} of {totalPages}</span>
              <span onClick={navigateToNextPage} style={{cursor:'pointer'}}><i className="fa-solid fa-forword ms-5"></i></span>
            </div>
        </>
      }
    </div>
  </>
  )
}
        
  
       
export default RecipeList;
