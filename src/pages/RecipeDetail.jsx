//view recipes
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { addToRecipes } from '../redux/recipeSlice'
import { useDispatch, useSelector } from 'react-redux'
//import { addToCart } from '../redux/slices/cartSlice'

const RecipeDetail = () => {
  //const myCart = useSelector(state=>state.cartReducer)
  const myRecipes = useSelector(state=>state.recipeReducer)
  const dispatch = useDispatch()
  const [recipes,setRecipes] = useState({})
  const {id} = useParams()
  //console.log(id);

  useEffect(()=>{
    if(sessionStorage.getItem("allrecipes")){
      const allrecipes = JSON.parse(sessionStorage.getItem("allrecipes"))
      setRecipes(allrecipes.find(item=>item.id==id))
    }
  },[])
  //console.log(product);
  const handleRecipes = (recipes)=>{

    //const existingProduct = myWishlist?.find(item=>item.id==product.id)  

    if(myRecipes?.includes(recipes)){
      alert("product already in your wishlist!!!")
    }else{
      //add product
      dispatch(addToRecipes(recipes))
    }
  }
  
  // const handleAddToCart = (recipes)=>{
  //   const existingProduct = myCart?.find(item=>item.id==recipes.id)
  //   if(existingProduct){
  //     dispatch(addToCart(recipes))
  //     alert("product quantity is incrementing!!!")
  //   }else{
  //     dispatch(addToCart(recipes))
  //   }
  // }
  
  
  return (
    <>
      < Header/>
      <div style={{minHeight:'90vh'}} className="flex justify-center items-center mx-5 ">
        <div className="grid grid-cols-2 items-center ">
          <img className='rounded p-2 shadow' style={{width:'80%',height:'300px'}} src={recipes?.image} alt="" />
          <div>
            <h3>RID: {recipes?.id}</h3>
            <h1 className='text-3xl fontr-bold'>{recipes?.name}</h1>
            <h4 className='font-bold text-red-500 text-xl'>Rating : {recipes?.rating}</h4>
            <h4 className='font-bold text-red-500 text-xl'>cuisine : {recipes?.cuisine}</h4>
            <p><span className='font-bold'>instructions</span> {recipes?.instructions}</p>
            {/* <div className="flex justify-between m-5">
              <button onClick={()=>handleRecipes(recipes)} className='bg-blue-600 text-white p-2 rounded'>ADD TO WISHLIST</button>
              <button onClick={()=>handleAddToCart(recipes)} className='bg-green-600 text-white p-2 rounded'>ADD TO CART</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeDetail