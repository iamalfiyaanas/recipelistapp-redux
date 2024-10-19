import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../redux/recipeSlice'

const Header = ({insideHome}) => {

    const dispatch = useDispatch()

  return (
    <nav className='flex w-full bg-green-500 fixed top-0 p-3 items-center'>
      <Link style={{textDecoration:'none'}} className='text-white font-bold ' to={'/'}><i className="fa-solid fa-drumstick-bite me-1"></i>RecipeList App</Link>
      <ul className='flex-1 text-right'>
        { insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))} style={{width:'300px'}} className='rounded p-1' type="text" placeholder='Search Recipes by Cuisine!!!'/></li>}
        {/* <li className='list-none inline-block px-5'><Link to={'/wishlist'} className='text-white px-2'><i className='fa-solid fa-heart text-red-600 me-1'></i>Wishlist <span className='bg-black rounded p-1'>{myWishlist.length}</span></Link></li>
        <li className='list-none inline-block px-5'><Link to={'/cart'} className='text-white px-2'><i className='fa-solid fa-cart-plus me-1 text-green-600'></i>Cart <span className='bg-black rounded p-1'>10</span></Link></li> */}
      </ul>
    </nav>
  )
}

export default Header